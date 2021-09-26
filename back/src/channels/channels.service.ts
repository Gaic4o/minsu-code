import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';
import { ChannelChats } from '../entities/ChannelChats';
import { ChannelMembers } from '../entities/ChannelMembers';
import { Channels } from '../entities/Channels';
import { Users } from '../entities/Users';
import { Workspaces } from '../entities/Workspaces';
import { EventsGateway } from '../events/events.gateway';

@Injectable()
export class ChannelsService {
    constructor(
        @InjectRepository(Channels)
        private channelsRepository: Repository<Channels>,
        @InjectRepository(ChannelMembers)
        private channelMembersRepository: Repository<ChannelMembers>,
        @InjectRepository(Workspaces)
        private workspacesRepository: Repository<Workspaces>,
        @InjectRepository(ChannelChats)
        private channelChatsRepository: Repository<ChannelChats>,
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
        private readonly eventsGateway: EventsGateway,
      ) {

      }

      async findById(id: number) {
          return this.channelsRepository.findOne({ where: { id }});
      }

      // 채널 가져오기.
      async getWorkspaceChannels(url: string, myId: number) {
            return this.channelsRepository
            // 풀name 으로 잘 적어주기. channels 가져오기.
            .createQueryBuilder('channels')
            // 채널 Member 가져오기. 
            .innerJoinAndSelect(
                'channels.ChannelMembers',
                'channelMembers',
                'channelMembers.userId = :myId',
                { myId },
            )
            // 채널에 대한 workspace 도 가져옴. 
            .innerJoinAndSelect(
                'channels.Workspace',
                'workspace',
                'workspace.url = :url',
                { url },
            )
            .getMany();
        }


        // 워크스페이스 채널 하나 가져오기.
        async getWorkspaceChannel(url: string, name: string) {
            return this.channelsRepository
              .createQueryBuilder('channel')
              .innerJoin('channel.Workspace', 'workspace', 'workspace.url = :url', {
                url,
              })
              .where('channel.name = :name', { name })
              .getOne();
          }

          // 채널 생성하기.
          async createWorkspaceChannels(url: string, name: string, myId: number) {
            //   워크스페이스 찾고
            const workspace = await this.workspacesRepository.findOne({
              where: { url },
            });
            // 새로운 채널 만들어서. 
            const channel = new Channels();
            channel.name = name;
            channel.WorkspaceId = workspace.id;
            // 저장
            const channelReturned = await this.channelsRepository.save(channel);
            const channelMember = new ChannelMembers();
            channelMember.UserId = myId;
            channelMember.ChannelId = channelReturned.id;
            await this.channelMembersRepository.save(channelMember);
          }
        

          async getWorkspaceChannelMembers(url: string, name: string) {
            return this.usersRepository
              .createQueryBuilder('user')
                // 이 이름에 속해있는 사람들 가져오기. 
              .innerJoin('user.Channels', 'channels', 'channels.name = :name', {
                name,
              })
                // 워크스페이스는 이 url 를 갖고 있어야 한다. 
              .innerJoin('channels.Workspace', 'workspace', 'workspace.url = :url', {
                url,
              })
              .getMany();
          }




          
          async createWorkspaceChannelMembers(url, name, email) {
            const channel = await this.channelsRepository
              .createQueryBuilder('channel')
              .innerJoin('channel.Workspace', 'workspace', 'workspace.url = :url', {
                url,
              })
              .where('channel.name = :name', { name })
              .getOne();
            if (!channel) {
              throw new NotFoundException('채널이 존재하지 않습니다.');
            }
            const user = await this.usersRepository
              .createQueryBuilder('user')
              .where('user.email = :email', { email })
              .innerJoin('user.Workspaces', 'workspace', 'workspace.url = :url', {
                url,
              })
              .getOne();
            if (!user) {
                throw new NotFoundException('사용자가 존재하지 않습니다.');
            }
            const channelMember = new ChannelMembers();
            channelMember.ChannelId = channel.id;
            channelMember.UserId = user.id;
            await this.channelMembersRepository.save(channelMember);
          }


          async getWorkspaceChannelChats(
            url: string,
            name: string,
            perPage: number,
            page: number,
          ) {
            return this.channelChatsRepository
              .createQueryBuilder('channelChats')
              .innerJoin('channelChats.Channel', 'channel', 'channel.name = :name', {
                name,
              })
              .innerJoin('channel.Workspace', 'workspace', 'workspace.url = :url', {
                url,
              })
            //  채팅 누가 썼는지. 
              .innerJoinAndSelect('channelChats.User', 'user')
            //  날짜 역순으로 정렬. 
              .orderBy('channelChats.createdAt', 'DESC')
              .take(perPage)
            //  skip 1페이지 20개 2페이지 20개. 
              .skip(perPage * (page - 1))
              .getMany();
          }
        
          async createWorkspaceChannelChats(
            url: string,
            name: string,
            content: string,
            myId: number,
          ) {
            const channel = await this.channelsRepository
              .createQueryBuilder('channel')
              .innerJoin('channel.Workspace', 'workspace', 'workspace.url = :url', {
                url,
              })
              .where('channel.name = :name', { name })
              .getOne();
            const chats = new ChannelChats();
            chats.content = content;
            chats.UserId = myId;
            chats.ChannelId = channel.id;
            const savedChat = await this.channelChatsRepository.save(chats);
            const chatWithUser = await this.channelChatsRepository.findOne({
              where: { id: savedChat.id },
              relations: ['User', 'Channel'],
            });
            this.eventsGateway.server
              // .of(`/ws-${url}`)
              .to(`/ws-${url}-${chatWithUser.ChannelId}`)
              .emit('message', chatWithUser);
          }
        

          async getChannelUnreadsCount(url, name, after) {
            //   채널에 보여주는 않읽은 갯수. api 로 만듬. 
            // 채널 찾기. 
            const channel = await this.channelsRepository
              .createQueryBuilder('channel')
              .innerJoin('channel.Workspace', 'workspace', 'workspace.url = :url', {
                url,
              })
              .where('channel.name = :name', { name })
              .getOne();
            //  count - COUNT(*) 
            return this.channelChatsRepository.count({
              where: {
                //   채널에서 id 얻어 올려고. 
                ChannelId: channel.id,
                // typeorm에서 연산자 같은 것을 쓸 수 있음. 
                createdAt: MoreThan(new Date(after)), // createdAt > '2021-05-28' 
              },
            });
          }


          // 채팅 DB 저장 한 다음 - 웹 소켓으로 뿌려주기. 
          async postChat({url, name, content, myId}) {
            const channel = await this.channelsRepository
            .createQueryBuilder('channel')
            .innerJoin('channel.Workspace', 'workspace', 'workspace.url = :url', {
              url,
            })
            .where('channel.name = :name', { name })
            .getOne();
            if (!channel) {
              throw new NotFoundException('채널이 존재하지 않습니다.');
            }
         const chats = new ChannelChats();
    chats.content = content;
    chats.UserId = myId;
    chats.ChannelId = channel.id;
    const savedChat = await this.channelChatsRepository.save(chats);
    const chatWithUser = await this.channelChatsRepository.findOne({
      where: { id: savedChat.id },
      relations: ['User', 'Channel'],
    });
    this.eventsGateway.server
      // .of(`/ws-${url}`)
      .to(`/ws-${url}-${chatWithUser.ChannelId}`)
      .emit('message', chatWithUser);
  }



  async createWorkspaceChannelImages(
    url: string,
    name: string,
    files: Express.Multer.File[],
    myId: number,
  ) {
    console.log(files);
    const channel = await this.channelsRepository
      .createQueryBuilder('channel')
      .innerJoin('channel.Workspace', 'workspace', 'workspace.url = :url', {
        url,
      })
      .where('channel.name = :name', { name })
      .getOne();
    for (let i = 0; i < files.length; i++) {
      const chats = new ChannelChats();
      chats.content = files[i].path;
      chats.UserId = myId;
      chats.ChannelId = channel.id;
      const savedChat = await this.channelChatsRepository.save(chats);
      const chatWithUser = await this.channelChatsRepository.findOne({
        where: { id: savedChat.id },
        relations: ['User', 'Channel'],
      });
      this.eventsGateway.server
        // .of(`/ws-${url}`)
        .to(`/ws-${url}-${chatWithUser.ChannelId}`)
        .emit('message', chatWithUser);
    }
  }

          
}

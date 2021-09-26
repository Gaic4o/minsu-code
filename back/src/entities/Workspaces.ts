import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Channels } from './Channels';
import { DMs } from './DMs';
import { Mentions } from './Mentions';
import { WorkspaceMembers } from './WorkspaceMembers';
import { Users } from './Users';

// Index는 
@Index('name', ['name'], { unique: true })
@Index('url', ['url'], { unique: true })
@Index('OwnerId', ['OwnerId'], {})

// Entity DB 명은 minsucode name은 
@Entity({ schema: 'minsucode', name: 'workspaces' })
export class Workspaces {

  // 워크스페이스 아이디
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;
  //  이름 
  @Column('varchar', { name: 'name', unique: true, length: 30 })
  name: string;
  //  주소 
  @Column('varchar', { name: 'url', unique: true, length: 30 })
  url: string;
  //  생성일 
  @CreateDateColumn()
  createdAt: Date;
  // 수정일
  @UpdateDateColumn()
  updatedAt: Date;
  //  삭제일 
  @DeleteDateColumn()
  deletedAt: Date | null;
  // 누가 만들었는지 
  @Column('int', { name: 'OwnerId', nullable: true })
  OwnerId: number | null;

  //  관계설정들.


  @OneToMany(() => Channels, (channels) => channels.Workspace)
  Channels: Channels[];

  @OneToMany(() => DMs, (dms) => dms.Workspace)
  DMs: DMs[];


    // Foreign 키 정보  worksapceColumneName 
  // Workspace ID 보고 Workspace 객체를 생성 해 줍니다. 
  @OneToMany(() => Mentions, (mentions) => mentions.Workspace)
  Mentions: Mentions[];

  @OneToMany(
    () => WorkspaceMembers,
    (workspacemembers) => workspacemembers.Workspace,
    { cascade: ['insert'] },
  )
  WorkspaceMembers: WorkspaceMembers[];

  @ManyToOne(() => Users, (users) => users.Workspaces, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'OwnerId', referencedColumnName: 'id' }])
  Owner: Users;

  @ManyToMany(() => Users, (users) => users.Workspaces)
  Members: Users[];
}

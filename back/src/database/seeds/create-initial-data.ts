import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Channels } from '../../entities/Channels';
import { Workspaces } from '../../entities/Workspaces';


// 초기 데이터 넣어주는 seeding 작업. 
export class CreateInitialData implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Workspaces)
      .values([{ id: 1, name: 'minsucode', url: 'MinsuCode' }])
      .execute();
    await connection
      .createQueryBuilder()
      .insert()
      .into(Channels)
      .values([{ id: 1, name: '일반', WorkspaceId: 1, private: false }])
      .execute();
  }
}

import { ApiProperty } from '@nestjs/swagger';

export class CreateWorkspaceDto {
  @ApiProperty({
    example: 'minsucode',
    description: '워크스페이스명',
  })
  public workspace: string;

  @ApiProperty({
    example: 'miscode',
    description: 'url 주소',
  })
  public url: string;
}

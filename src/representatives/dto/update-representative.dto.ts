import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';

export class UpdateRepresentativeDTO
  implements Readonly<UpdateRepresentativeDTO>
{
  @ApiProperty({
    required: true,
  })
  user: ObjectId;

  @ApiProperty()
  state: ObjectId;

  @ApiProperty({ default: false })
  isStateRepresentative: boolean;

  @ApiProperty({ default: false })
  isOrganizationRepresentative: boolean;

  @ApiProperty({ default: false })
  isEdtechRepresentative: boolean;

  @ApiProperty({ default: true })
  isActive: boolean;

  @ApiProperty({ default: false })
  isDeleted: boolean;
}

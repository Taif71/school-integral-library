import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';

export class CreateRepresentativeDTO
  implements Readonly<CreateRepresentativeDTO>
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
}

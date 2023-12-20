import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';

export class RepresentativeDTO implements Readonly<RepresentativeDTO> {
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

  @ApiProperty({ default: Date.now() })
  cTime: number;

  @ApiProperty()
  cBy: string;

  @ApiProperty({ default: Date.now() })
  uTime: number;

  @ApiProperty()
  uBy: string;
}

import {
  IsString,
  MaxLength,
  MinLength,
  Matches,
  IsOptional,
  ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Mobile } from '../../common/schemas';
import { MobileDTO } from '../../common/dto';

export class UpdateUserDTO implements Readonly<UpdateUserDTO> {
  @ApiProperty()
  @MaxLength(30)
  @MinLength(3)
  @Matches(/^[a-zA-Z ]+$/)
  @IsString()
  firstName: string;

  @ApiProperty()
  @MaxLength(30)
  @MinLength(3)
  @Matches(/^[a-zA-Z ]+$/)
  @IsString()
  @IsOptional()
  middleName: string;

  @ApiProperty()
  @MaxLength(30)
  @MinLength(3)
  @Matches(/^[a-zA-Z ]+$/)
  @IsString()
  lastName: string;

  @ApiProperty({
    type: MobileDTO,
  })
  @ValidateNested({ each: true })
  @Type(() => MobileDTO)
  mobile: Mobile;

  @ApiProperty()
  isAdmin: boolean;

  @ApiProperty()
  isSuperAdmin: boolean;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty()
  isVerified: boolean;

  @ApiProperty()
  isDeleted: boolean;

  @ApiProperty()
  isRegistered: boolean;

  @ApiProperty()
  timezone: string;
}

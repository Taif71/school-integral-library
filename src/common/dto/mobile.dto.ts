import { IsBoolean, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MobileDTO implements Readonly<MobileDTO> {
  @ApiProperty()
  @MaxLength(6)
  @MinLength(1)
  @IsString()
  countryCode: string;

  @ApiProperty()
  @MaxLength(15)
  @MinLength(6)
  @IsString()
  mobile: string;

  @ApiProperty()
  @IsBoolean()
  isVerified: boolean;

  @ApiProperty()
  @IsBoolean()
  isVisible: boolean;

  @ApiProperty()
  @IsBoolean()
  isPrimary: boolean;

  @ApiProperty()
  @IsBoolean()
  isDeleted: boolean;
}

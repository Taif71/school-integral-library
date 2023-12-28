import { IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CurriculamDTO implements Readonly<CurriculamDTO> {
  @ApiProperty()
  prePrimary: string[];

  @ApiProperty()
  primary: string[];

  @ApiProperty()
  jss1_3: string[];

  @ApiProperty()
  sss1_3: string[];

  @ApiProperty()
  technology: string[];

  @ApiProperty()
  tradeAndEntrepreneurship: string[];

  @ApiProperty()
  isDeleted: boolean;
}

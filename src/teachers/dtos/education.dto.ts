import { IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ACADEMIC_CERTIFICATION } from '../../common';

export class EducationDTO implements Readonly<EducationDTO> {
  @ApiProperty({
    enum: ACADEMIC_CERTIFICATION,
  })
  @IsEnum(ACADEMIC_CERTIFICATION)
  certification: ACADEMIC_CERTIFICATION;

  @ApiProperty()
  areaOfStudy: string;

  @ApiProperty()
  Institution: string;

  @ApiProperty()
  yearOfGraduation: number;

  @ApiProperty({
    default: false,
  })
  isDeleted: boolean;
}

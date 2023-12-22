import { ApiProperty } from '@nestjs/swagger';

export class ExperienceDTO implements Readonly<ExperienceDTO> {
  @ApiProperty()  
  totalNumberOfYears: number;

  @ApiProperty()
  school: string;

  @ApiProperty()
  position: string;

  @ApiProperty()
  roles: string;

  @ApiProperty()
  startDate: number;

  @ApiProperty()
  endDate: number;

  @ApiProperty()
  isStillWorking: boolean;

  @ApiProperty({
    default: false,
  })
  isDeleted: boolean;
}

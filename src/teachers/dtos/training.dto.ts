import { ApiProperty } from '@nestjs/swagger';
import { IMedia, MediaDTO, TRAINING_CATEGORY } from '../../common';
import { IsEnum, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class TrainingDTO implements Readonly<TrainingDTO> {
    @ApiProperty()
    hasCertificate: boolean;

    @ApiProperty({
        enum: TRAINING_CATEGORY,
    })
    @IsEnum(TRAINING_CATEGORY)
    category: TRAINING_CATEGORY;

    @ApiProperty()
    startDate: number;

    @ApiProperty()
    endDate: number;

    @ApiProperty({
        type: MediaDTO,
    })
    @ValidateNested({ each: true })
    @Type(() => MediaDTO)
    file: IMedia;

    @ApiProperty({
        default: false,
    })
    isDeleted: boolean;
}

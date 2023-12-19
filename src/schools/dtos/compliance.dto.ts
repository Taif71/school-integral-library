import {
    IsString,
    ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IMedia, MediaDTO } from 'src/common';

export class ComplianceDTO implements Readonly<ComplianceDTO> {
    @ApiProperty()
    @IsString()
    nameOfBody: string;

    @ApiProperty()
    dateOfApproval: number;

    @ApiProperty()
    duration: number;

    @ApiProperty({
        type: MediaDTO,
    })
    @ValidateNested({ each: true })
    @Type(() => MediaDTO)
    file: IMedia;

    @ApiProperty()
    isDeleted: boolean;
}

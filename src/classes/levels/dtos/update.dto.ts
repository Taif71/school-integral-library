import {
    IsString,
    IsArray,
    ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ArmForLevel } from '../schemas/armForLevel.schema';
import { ArmForLevelDTO } from './armForLevel.dto';


export class UpdateLevelDTO implements Readonly<UpdateLevelDTO> {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    category: string;

    @ApiProperty()
    year: number;

    @ApiProperty()
    @IsString()
    assessmentFormat: string;

    @ApiProperty()
    @IsString()
    gradingFormat: string;

    @ApiProperty({
        type: [ArmForLevelDTO],
    })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ArmForLevelDTO)
    arms: [ArmForLevel];

    @ApiProperty()
    isActive: boolean;

    @ApiProperty()
    isDelete: boolean;

    @ApiProperty()
    @IsString()
    timezone: string;
}

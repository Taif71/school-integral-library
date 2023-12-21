import {
    IsString,
    IsArray,
    ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ArmForLevel } from '../schema/armForLevel.schema';
import { ArmForLevelDTO } from './armForLevel.dto';


export class LevelDTO implements Readonly<LevelDTO> {
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
    GradingFormat: string;

    @ApiProperty({
        type: [ArmForLevelDTO],
    })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ArmForLevelDTO)
    arms: [ArmForLevel];

    @ApiProperty()
    isDeleted: boolean;

    @ApiProperty()
    cTime: number;

    @ApiProperty()
    cBy: string;

    @ApiProperty()
    uTime: number;

    @ApiProperty()
    uBy: string;
}

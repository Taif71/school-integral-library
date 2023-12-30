import {
    IsString,
    IsArray,
    ValidateNested,
    IsMongoId
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ArmForLevel } from '../schemas/armForLevel.schema';
import { ArmForLevelDTO } from './armForLevel.dto';


export class LevelDTO implements Readonly<LevelDTO> {
    @ApiProperty()
    @IsMongoId()
    school: string;

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
    cTime: number;

    @ApiProperty()
    cBy: string;

    @ApiProperty()
    uTime: number;

    @ApiProperty()
    uBy: string;
}

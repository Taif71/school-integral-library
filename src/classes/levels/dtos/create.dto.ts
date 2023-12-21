import {
    IsString,
    IsArray,
    ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ArmForLevel } from '../schema/armForLevel.schema';
import { ArmForLevelDTO } from './armForLevel.dto';


export class CreateLevelDTO implements Readonly<CreateLevelDTO> {
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
}

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


export class CreateLevelDTO implements Readonly<CreateLevelDTO> {
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
    @IsString()
    timezone: string;
}

import {
    IsString,
    IsMongoId
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class ArmDTO implements Readonly<ArmDTO> {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsMongoId()
    school: string;

    @ApiProperty()
    @IsString()
    timezone: string;

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

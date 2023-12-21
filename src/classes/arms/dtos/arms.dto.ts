import {
    IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class ArmDTO implements Readonly<ArmDTO> {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    timezone: string;

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

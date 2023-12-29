import {
    IsMongoId,
    IsArray,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class AttendanceDTO implements Readonly<AttendanceDTO> {
    @ApiProperty()
    @IsMongoId()
    class: string;

    @ApiProperty()
    date: number;

    @ApiProperty()
    @IsArray()
    presentStudents: string[]; 

    @ApiProperty()
    @IsArray()
    absentStudents: string[];

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

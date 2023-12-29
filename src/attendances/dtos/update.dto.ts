import {
    IsMongoId,
    IsArray,
    IsString
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class UpdateAttendanceDTO implements Readonly<UpdateAttendanceDTO> {
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
    @IsString()
    timezone: string;
}

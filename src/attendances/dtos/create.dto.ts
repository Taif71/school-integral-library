import {
    IsMongoId,
    IsArray,
    IsString
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateAttendanceDTO implements Readonly<CreateAttendanceDTO> {
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
    @IsString()
    timezone: string;
}

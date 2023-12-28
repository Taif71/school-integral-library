import {
    IsString,
    IsMongoId,
    IsArray
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateClassDTO implements Readonly<UpdateClassDTO> {
    @ApiProperty()
    room: number;

    @ApiProperty()
    @IsMongoId()
    classTeacher: string;

    @ApiProperty()
    @IsArray()
    students: string[];

    @ApiProperty()
    isActive: boolean;

    @ApiProperty()
    isDeleted: boolean;

    @ApiProperty()
    @IsString()
    timezone: string;
}

import {
    IsMongoId,
    IsArray,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class ClassDTO implements Readonly<ClassDTO> {
    @ApiProperty()
    code: string;

    @ApiProperty()
    @IsMongoId()
    school: string;

    @ApiProperty()
    @IsMongoId()
    level: string;

    @ApiProperty()
    @IsMongoId()
    arm: string;

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
    cTime: number;

    @ApiProperty()
    cBy: string;

    @ApiProperty()
    uTime: number;

    @ApiProperty()
    uBy: string;
}

import {
    IsMongoId,
    IsString
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClassDTO implements Readonly<CreateClassDTO> {
    @ApiProperty()
    @IsMongoId()
    level: string;

    @ApiProperty()
    @IsMongoId()
    arm: string;

    @ApiProperty()
    room: number;

    @ApiProperty()
    @IsString()
    timezone: string;
}

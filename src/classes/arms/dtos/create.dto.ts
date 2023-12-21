import {
    IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateArmsDTO implements Readonly<CreateArmsDTO> {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    timezone: string;
}

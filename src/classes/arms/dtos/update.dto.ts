import {
    IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateArmsDTO implements Readonly<UpdateArmsDTO> {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    timezone: string;
}

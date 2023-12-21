import {
    IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateArmDTO implements Readonly<UpdateArmDTO> {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    timezone: string;
}

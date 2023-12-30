import {
    IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateArmDTO implements Readonly<UpdateArmDTO> {
    @ApiProperty()
    @IsString()
    name: string;
    
    @ApiProperty()
    isActive: boolean;

    @ApiProperty()
    isDelete: boolean;

    @ApiProperty()
    @IsString()
    timezone: string;
}

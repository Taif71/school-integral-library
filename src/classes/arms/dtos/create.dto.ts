import {
    IsString,
    IsMongoId
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateArmDTO implements Readonly<CreateArmDTO> {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsMongoId()
    school: string;

    @ApiProperty()
    @IsString()
    timezone: string;
}

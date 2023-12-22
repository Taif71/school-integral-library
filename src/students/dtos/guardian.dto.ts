import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, ValidateNested } from 'class-validator';
import { IMobile, MobileDTO } from '../../common';
import { Type } from 'class-transformer';

export class GuardianDTO implements Readonly<GuardianDTO> {
    @ApiProperty()
    fullName: string;

    @ApiProperty()
    age: number;

    @ApiProperty()
    gender: string;

    @ApiProperty()
    relationship: string;

    @ApiProperty({
        type: MobileDTO,
    })
    @ValidateNested({ each: true })
    @Type(() => MobileDTO)
    mobile: IMobile;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    occupation: string;

    @ApiProperty()
    nin: string;

    @ApiProperty()
    address: string;

    @ApiProperty({
        default: false,
    })
    isDeleted: boolean;
}

import {
    IsString,
    IsEmail,
    ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IMedia, IMobile, MediaDTO, MobileDTO } from 'src/common';

export class AttestationDTO implements Readonly<AttestationDTO> {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    designation: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    date: number;

    @ApiProperty({
        type: MobileDTO,
    })
    @ValidateNested({ each: true })
    @Type(() => MobileDTO)
    mobile: IMobile;

    @ApiProperty({
        type: MediaDTO,
    })
    @ValidateNested({ each: true })
    @Type(() => MediaDTO)
    signature: IMedia;

    @ApiProperty()
    isDeleted: boolean;
}

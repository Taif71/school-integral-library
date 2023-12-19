import {
    IsEmail,
    IsString,
    ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IMedia, MediaDTO, IMobile, MobileDTO } from 'src/common';

export class OwnershipDTO implements Readonly<OwnershipDTO> {
    @ApiProperty()
    @IsString()
    legalName: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty({
        type: MobileDTO,
    })
    @ValidateNested({ each: true })
    @Type(() => MobileDTO)
    mobile: IMobile;

    @ApiProperty()
    cac_rcNumber: string;

    @ApiProperty()
    yearOfEstablishment: number;

    @ApiProperty()
    recognitionStatus: number;

    @ApiProperty()
    isDeleted: boolean;
}

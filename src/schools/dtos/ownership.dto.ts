import {
    IsEmail,
    IsEnum,
    IsString,
    ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IMobile, MobileDTO, RECOGNITION_STATUS } from '../../common';

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

    @ApiProperty({
        enum: RECOGNITION_STATUS
    })
    @IsEnum(RECOGNITION_STATUS)
    recognitionStatus: string;

    @ApiProperty()
    isDeleted: boolean;
}

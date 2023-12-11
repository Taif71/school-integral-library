import {
    IsString,
    IsNotEmpty,
    IsBoolean,
    IsNumber
} from 'class-validator';

export class PartnerDTO implements Readonly<PartnerDTO> {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    accessKey: string;

    @IsNotEmpty()
    @IsString()
    secretKey: string;

    @IsNumber()
    keyExpiresAt: number;

    @IsBoolean()
    isActive: boolean;

    @IsBoolean()
    isDeleted: boolean;

    @IsNumber()
    cTime: number;

    @IsString()
    cBy: string;
}
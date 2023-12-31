import {
    IsString,
    MaxLength,
    MinLength,
    Matches,
    IsArray,
    ValidateNested,
    IsOptional,
    IsEnum,
    IsEmail,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
    Gender,
    IMedia,
    MediaDTO,
    LocationDTO,
    ILocation,
    BLOOD_GROUP
} from '../../common';
import { IGuardian } from '../interfaces';
import { GuardianDTO } from './guardian.dto';

export class UpdateStudentDTO implements Readonly<UpdateStudentDTO> {
    @ApiProperty()
    @MaxLength(30)
    @MinLength(3)
    @Matches(/^[a-zA-Z ]+$/)
    @IsString()
    firstName: string;

    @ApiProperty()
    @MaxLength(30)
    @MinLength(3)
    @Matches(/^[a-zA-Z ]+$/)
    @IsString()
    @IsOptional()
    middleName: string;

    @ApiProperty()
    @MaxLength(30)
    @MinLength(3)
    @Matches(/^[a-zA-Z ]+$/)
    @IsString()
    lastName: string;

    @ApiProperty()
    dob: number;

    @ApiProperty({
        enum: Gender,
    })
    @IsEnum(Gender)
    gender: Gender;

    @ApiProperty()
    religion: string;

    @ApiProperty()
    nationality: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty({
        type: MediaDTO,
    })
    @ValidateNested({ each: true })
    @Type(() => MediaDTO)
    passportPhoto: IMedia;

    @ApiProperty({
        type: LocationDTO,
    })
    @ValidateNested({ each: true })
    @Type(() => LocationDTO)
    address: ILocation;

    @ApiProperty()
    genotype: string;

    @ApiProperty({
        enum: BLOOD_GROUP,
    })
    @IsEnum(BLOOD_GROUP)
    bloodGroup: BLOOD_GROUP;

    @ApiProperty()
    weight: string;

    @ApiProperty()
    height: string;

    @ApiProperty()
    allergies: string;

    @ApiProperty()
    chronicHealthCondition: string;

    @ApiProperty()
    specialNeeds: string;

    @ApiProperty()
    isAvailableVaccinationCard: boolean;

    @ApiProperty()
    availableCards: string[];

    @ApiProperty({
        type: [GuardianDTO],
    })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => GuardianDTO)
    guardians: [IGuardian];

    @ApiProperty({
        type: GuardianDTO,
    })
    @ValidateNested({ each: true })
    @Type(() => GuardianDTO)
    emergencyContact: IGuardian;

    @ApiProperty()
    isActive: boolean;

    @ApiProperty()
    isDelete: boolean;

    @ApiProperty()
    timezone: string;
}

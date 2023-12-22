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
    MARITAL_STATUS,
    EMPLOYER_TYPE,
    MobileDTO,
    Mobile,
    APPOINMENT_TYPE,
    IMedia,
    MediaDTO,
    LocationDTO,
    ILocation,
    BLOOD_GROUP
} from '../../common';
import { IEducation, IExperience, ITraining } from '../interfaces';
import { EducationDTO } from './education.dto';
import { ExperienceDTO } from './experience.dto';
import { TrainingDTO } from './training.dto';

export class CreateTeacherDTO implements Readonly<CreateTeacherDTO> {
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

    @ApiProperty({
        enum: MARITAL_STATUS,
    })
    @IsEnum(MARITAL_STATUS)
    maritalStatus: MARITAL_STATUS;

    @ApiProperty({
        enum: EMPLOYER_TYPE,
    })
    @IsEnum(EMPLOYER_TYPE)
    typeOfEmployer: EMPLOYER_TYPE;

    @ApiProperty({
        type: MobileDTO,
    })
    @ValidateNested({ each: true })
    @Type(() => MobileDTO)
    mobile: Mobile;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    nin: string;
    
    @ApiProperty()
    trcnNumber: string;

    @ApiProperty()
    trcNo: string;

    @ApiProperty()
    yearOfEmployment: number;

    @ApiProperty()
    currentGradeLevel: string;

    @ApiProperty()
    teacherId: string;

    @ApiProperty()
    issuingInstitution: string;

    @ApiProperty({
        enum: APPOINMENT_TYPE,
    })
    @IsEnum(APPOINMENT_TYPE)
    typeOfAppoinment: APPOINMENT_TYPE;

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
    timezone: number;
}

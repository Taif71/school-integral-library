import {
    IsString,
    MaxLength,
    MinLength,
    Matches,
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
} from '../../common';

export class CreateStudentDTO implements Readonly<CreateStudentDTO> {
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
    timezone: string;
}

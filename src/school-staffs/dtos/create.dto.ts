import {
    IsMongoId,
    IsString,
    IsEnum,
    IsEmail,
    Matches,
    ValidateNested,
    IsNotEmpty
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
    STAFF_TYPE,
    MobileDTO,
    IMobile
} from '../../common';

export class CreateSchoolStaffDTO implements Readonly<CreateSchoolStaffDTO> {
    @ApiProperty()
    @IsMongoId()
    school: string;

    @ApiProperty()
    @IsMongoId()
    user: string;

    @ApiProperty({
        enum: STAFF_TYPE,
    })
    @IsEnum(STAFF_TYPE)
    staffType: string;

    @ApiProperty()
    @Matches(/^[a-zA-Z ]+$/)
    @IsString()
    firstName: string;

    @ApiProperty()
    @Matches(/^[a-zA-Z ]+$/)
    @IsString()
    lastName: string;

    @ApiProperty({
        example: 'john@mail.com',
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        type: MobileDTO,
    })
    @ValidateNested({ each: true })
    @Type(() => MobileDTO)
    mobile: IMobile;

    @ApiProperty()
    nin: string;

    @ApiProperty()
    @IsString()
    timezone: string;
}

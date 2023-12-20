import {
    IsString,
    ValidateNested,
    IsEnum
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import {
    OWNERSHIP,
    CATEGORY,
    TYPE,
    ILocation,
    LocationDTO
} from '../../common';

export class CreateSchoolDTO implements Readonly<CreateSchoolDTO> {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty({
        enum: OWNERSHIP,
    })
    @IsEnum(OWNERSHIP)
    ownershipType: string;

    @ApiProperty({
        enum: CATEGORY,
    })
    @IsEnum(CATEGORY)
    category: string;

    @ApiProperty({
        enum: TYPE,
    })
    @IsEnum(TYPE)
    type: string;

    @ApiProperty()
    code: string;

    @ApiProperty()
    additionalId: string;

    @ApiProperty({
        type: LocationDTO,
    })
    @ValidateNested({ each: true })
    @Type(() => LocationDTO)
    address: ILocation;

    @ApiProperty()
    @IsString()
    timezone: string;
}

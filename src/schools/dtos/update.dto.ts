import {
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
import {
    IAttestation,
    ICompliance,
    IMembership,
    ISchoolOwnership
} from '../interfaces';
import { OwnershipDTO } from './ownership.dto';
import { ComplianceDTO } from './compliance.dto';
import { MembershipDTO } from './membership.dto';
import { AttestationDTO } from './attestation.dto';

export class UpdateSchoolDTO implements Readonly<UpdateSchoolDTO> {
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

    @ApiProperty({
        type: OwnershipDTO,
    })
    @ValidateNested({ each: true })
    @Type(() => OwnershipDTO)
    ownership: ISchoolOwnership;

    @ApiProperty()
    curriculams: string[];

    @ApiProperty()
    specialPrograms: string[];

    @ApiProperty({
        type: ComplianceDTO,
    })
    @ValidateNested({ each: true })
    @Type(() => ComplianceDTO)
    approval: ICompliance;

    @ApiProperty({
        type: ComplianceDTO,
    })
    @ValidateNested({ each: true })
    @Type(() => ComplianceDTO)
    license: ICompliance;

    @ApiProperty({
        type: ComplianceDTO,
    })
    @ValidateNested({ each: true })
    @Type(() => ComplianceDTO)
    curriculamLicense: ICompliance;

    @ApiProperty({
        type: MembershipDTO,
    })
    @ValidateNested({ each: true })
    @Type(() => MembershipDTO)
    associationMembership: IMembership;

    @ApiProperty({
        type: AttestationDTO,
    })
    @ValidateNested({ each: true })
    @Type(() => AttestationDTO)
    attestation: IAttestation;

    @ApiProperty()
    isDeleted: boolean;

    @ApiProperty()
    timezone: string;
}

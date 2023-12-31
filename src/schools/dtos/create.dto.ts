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
    LocationDTO,
    CurriculamDTO,
    ICurriculam
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

    //From here to bottom- in the future it is requred to removed

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
        type: CurriculamDTO,
    })
    @ValidateNested({ each: true })
    @Type(() => CurriculamDTO)
    curriculam: ICurriculam;

    @ApiProperty({
        type: AttestationDTO,
    })
    @ValidateNested({ each: true })
    @Type(() => AttestationDTO)
    attestation: IAttestation;

    @ApiProperty()
    @IsString()
    timezone: string;
}

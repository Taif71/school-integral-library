import { ILocation } from "../../common";
import { IAttestation } from "./attestation.interface";
import { ICompliance } from "./compliance.interface";
import { IMembership } from "./membership.interface";
import { ISchoolOwnership } from "./ownership.interface";

export interface ISchool {
    readonly _id: string;
    readonly name: string;
    readonly ownershipType: string;
    readonly category: string;
    readonly code: string;
    readonly additionalId: string;
    readonly address: ILocation;
    readonly ownership: ISchoolOwnership;
    readonly curriculams: string[];
    readonly specialPrograms: string[];
    readonly approval: ICompliance;
    readonly license: ICompliance;
    readonly curriculamLicense: ICompliance;
    readonly associationMembership: IMembership;
    readonly attestation: IAttestation;
    readonly isDeleted: boolean;
    readonly cTime: number;
    readonly cBy: string;
    readonly uTime: number;
    readonly uBy: string;
  }
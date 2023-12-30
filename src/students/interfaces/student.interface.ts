import { ILocation, IMedia } from "src/common";
import { IGuardian } from "./guardian.interface";

export interface IStudent {
    readonly _id: string;
    readonly csi: string;
    readonly firstName: string;
    readonly middleName: string;
    readonly lastName: string;
    readonly dob: number;
    readonly gender: string;
    readonly religion: string;
    readonly nationality: string;
    readonly email: string;
    readonly passportPhoto: IMedia;
    readonly address: ILocation;
    readonly genotype: string;
    readonly bloodGroup: string;
    readonly weight: string;
    readonly height: string;
    readonly allergies: string;
    readonly chronicHealthCondition: string;
    readonly specialNeeds: string;
    readonly isAvailableVaccinationCard: boolean;
    readonly availableCards: string[];
    readonly guardians: IGuardian[];
    readonly emergencyContact: IGuardian;
    readonly isDeleted: boolean;
    readonly cTime: number;
    readonly cBy: string;
    readonly uTime: number;
    readonly uBy: string;
  }
  
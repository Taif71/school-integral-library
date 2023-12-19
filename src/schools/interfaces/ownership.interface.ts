import { IMobile } from "../../common";

export interface ISchoolOwnership {
    readonly _id: string;
    readonly legalName: string;
    readonly mobile: IMobile;
    readonly email: string;
    readonly cac_rcNumber: string;    
    readonly yearOfEstablishment: number;
    readonly recognitionStatus: number;
    readonly isDeleted: boolean;
  }
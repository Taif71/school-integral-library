import { IMobile } from "../../common";

export interface IGuardian {
    readonly _id: string;
    readonly fullName: string;
    readonly age: number;
    readonly gender: string;
    readonly relationship: string;    
    readonly mobile: IMobile;
    readonly email: string;
    readonly occupation: string;
    readonly nin: string;
    readonly address: string;
    readonly isDeleted: boolean;
  }
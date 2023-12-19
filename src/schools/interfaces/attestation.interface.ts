import { IMedia, IMobile } from "../../common";

export interface IAttestation {
    readonly _id: string;
    readonly name: string;
    readonly designation: IMobile;
    readonly email: string;
    readonly date: number;    
    readonly mobile: IMobile;
    readonly Signature: IMedia;
    readonly isDeleted: boolean;
  }
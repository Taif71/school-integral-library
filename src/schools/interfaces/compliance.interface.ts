import { IMedia } from "../../common";

export interface ICompliance {
    readonly _id: string;
    readonly nameOfBody: string;
    readonly dateOfApproval: number;
    readonly duration: number;
    readonly file: IMedia;
    readonly isDeleted: boolean;
  }
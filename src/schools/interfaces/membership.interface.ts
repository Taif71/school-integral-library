import { IMedia } from "../../common";

export interface IMembership {
    readonly _id: string;
    readonly name: string;
    readonly yearOfMembership: number;
    readonly file: IMedia;
    readonly isDeleted: boolean;
  }
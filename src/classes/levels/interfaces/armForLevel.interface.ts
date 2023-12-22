import { IArm } from "../../arms/interfaces";

export interface IArmForLevel {
    readonly _id: string;
    readonly arm: IArm;
    readonly room: number;
    readonly isDeleted: boolean;
  }
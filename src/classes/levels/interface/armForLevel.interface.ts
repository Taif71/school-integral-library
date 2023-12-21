import { IArm } from "../../../classes/arms/interfaces";

export interface IArmForLevel {
    readonly _id: string;
    readonly arm: IArm;
    readonly room: number;
    readonly isDeleted: boolean;
  }
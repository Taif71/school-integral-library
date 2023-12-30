import { ISchool } from "../../../schools/interfaces";

export interface IArm {
  readonly _id: string;
  readonly name: string;
  readonly school: ISchool;
  readonly isActive: boolean;
  readonly isDeleted: boolean;
  readonly cTime: number;
  readonly cBy: string;
  readonly uTime: number;
  readonly uBy: string;
}
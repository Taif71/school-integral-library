import { IArm } from "../../arms/interfaces";
import { ILevel } from "../../levels/interfaces";
import { ITeacher } from "../../../teachers/interfaces";
import { IStudent } from "../../../students/interfaces";

export interface IClass {
  readonly _id: string;
  readonly level: ILevel;
  readonly arm: IArm;
  readonly classTeacher: ITeacher;
  readonly students: IStudent[];
  readonly isActive: boolean;
  readonly isDeleted: boolean;
  readonly cTime: number;
  readonly cBy: string;
  readonly uTime: number;
  readonly uBy: string;
}
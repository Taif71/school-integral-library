import { IArm } from "../../arms/interfaces";
import { ILevel } from "../../levels/interfaces";
import { ITeacher } from "../../../teachers/interfaces";
import { IStudent } from "../../../students/interfaces";
import { ISchool } from "../../../schools/interfaces";

export interface IClass {
  readonly _id: string;
  readonly code: string;
  readonly school: ISchool;
  readonly level: ILevel;
  readonly arm: IArm;
  readonly room: number;
  readonly classTeacher: ITeacher;
  readonly students: IStudent[];
  readonly isActive: boolean;
  readonly isDeleted: boolean;
  readonly cTime: number;
  readonly cBy: string;
  readonly uTime: number;
  readonly uBy: string;
}
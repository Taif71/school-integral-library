import { IStudent } from "../../students/interfaces";

export interface IAttendance {
  readonly _id: string;
  readonly class: string;
  readonly date: number;
  readonly presentStudents: IStudent[];
  readonly absentStudents: IStudent[];
  readonly isDeleted: boolean;
  readonly cTime: number;
  readonly cBy: string;
  readonly uTime: number;
  readonly uBy: string;
}
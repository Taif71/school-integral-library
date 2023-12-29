import { ISchool } from '../../../schools/interfaces';
import { IArmForLevel } from './armForLevel.interface';

export interface ILevel {
  readonly _id: string;
  readonly school: ISchool;
  readonly name: string;
  readonly category: string;
  readonly year: number;
  readonly assessmentFormat: string;
  readonly gradingFormat: string;
  readonly arms: IArmForLevel[];
  readonly isDeleted: boolean;
  readonly cTime: number;
  readonly cBy: string;
  readonly uTime: number;
  readonly uBy: string;
}
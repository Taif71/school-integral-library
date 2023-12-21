import { IArmForLevel } from './armForLevel.interface';

export interface ILevel {
  readonly _id: string;
  readonly name: string;
  readonly category: string;
  readonly year: number;
  readonly assessmentFormat: string;
  readonly GradingFormat: string;
  readonly arms: IArmForLevel;
  readonly isDeleted: boolean;
}
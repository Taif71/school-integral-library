import { IPaginate } from '../../../common/interfaces';
import { ILevel } from './level.interface';

export interface ILevels extends IPaginate {
  data: ILevel[];
}

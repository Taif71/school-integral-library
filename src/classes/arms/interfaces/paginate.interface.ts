import { IPaginate } from '../../../common/interfaces';
import { IArm } from './arms.interface';

export interface IArms extends IPaginate {
  data: IArm[];
}

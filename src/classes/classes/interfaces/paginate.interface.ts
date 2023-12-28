import { IPaginate } from '../../../common/interfaces';
import { IClass } from './class.interface';

export interface IClasses extends IPaginate {
  data: IClass[];
}

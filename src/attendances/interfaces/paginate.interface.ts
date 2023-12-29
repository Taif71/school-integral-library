import { IPaginate } from '../../common/interfaces';
import { IAttendance } from './attendance.interface';

export interface IAttendances extends IPaginate {
  data: IAttendance[];
}

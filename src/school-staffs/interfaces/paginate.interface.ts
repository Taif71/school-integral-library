import { IPaginate } from '../../common/interfaces';
import { ISchoolStaff } from './school_staff.interface';

export interface ISchoolStaffs extends IPaginate {
  data: ISchoolStaff[];
}

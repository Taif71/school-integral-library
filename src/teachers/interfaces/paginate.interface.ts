import { IPaginate } from '../../common/interfaces';
import { ITeacher } from './teacher.interface';

export interface ITeachers extends IPaginate {
  data: ITeacher[];
}

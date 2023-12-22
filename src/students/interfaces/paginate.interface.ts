import { IPaginate } from '../../common/interfaces';
import { IStudent } from './student.interface';

export interface IStudents extends IPaginate {
  data: IStudent[];
}

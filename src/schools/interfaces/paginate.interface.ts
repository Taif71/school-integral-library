import { IPaginate } from '../../common/interfaces';
import { ISchool } from './school.interface';

export interface ISchools extends IPaginate {
  data: ISchool[];
}

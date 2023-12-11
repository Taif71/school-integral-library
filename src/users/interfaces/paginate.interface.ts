import { IPaginate } from '../../common/interfaces';
import { IUser } from './users.interface';

export interface IUsers extends IPaginate {
  data: IUser[];
}

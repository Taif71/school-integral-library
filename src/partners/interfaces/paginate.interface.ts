import { IPaginate } from '../../common/interfaces';
import { IPartner } from './partners.interface';

export interface IPartners extends IPaginate {
  data: IPartner[];
}

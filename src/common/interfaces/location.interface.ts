import { ICity, ICountry, IState } from '../../demographics/interfaces';

export interface ILocation {
  readonly _id: string;
  readonly address: string;
  readonly city: ICity;
  readonly state: IState;
  readonly country: ICountry;
  readonly zipCode: string;
  readonly lat: number;
  readonly lng: number;
  readonly isCurrent: boolean;
  readonly isPermanent: boolean;
  readonly isDeleted: boolean;
}

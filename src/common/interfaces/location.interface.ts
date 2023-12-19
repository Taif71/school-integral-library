import { ICity, ICountry, IState } from '../../demographics/interfaces';

export interface ILocation {
  readonly _id: string;
  readonly locationType: string;
  readonly area: string
  readonly address: string;
  readonly localGovnArea: ICity;
  readonly state: IState;
  readonly country: ICountry;
  readonly town: string;
  readonly zipCode: string;
  readonly avgDistancefromCatchmentAreas: number;
  readonly landmark: string;
  readonly description: string;
  readonly lat: number;
  readonly lng: number;
  readonly type: string;
  readonly coordinates: number[];
  readonly isDeleted: boolean;
}

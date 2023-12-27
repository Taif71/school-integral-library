import { IUser } from "../../users/interfaces";

export interface IRepresentative {
  readonly _id: string;
  readonly user: IUser;
  readonly state: string;
  readonly isStateRepresentative: boolean;
  readonly isOrganizationRepresentative: boolean;
  readonly isEdtechRepresentative: boolean;
  readonly isActive: boolean;
  readonly isDeleted: boolean;
  readonly cTime: number;
  readonly cBy: string;
  readonly uTime: number;
  readonly uBy: string;
}

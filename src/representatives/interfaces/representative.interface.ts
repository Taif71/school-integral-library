export interface IRepresentative {
  readonly _id: string;
  readonly user: string;
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

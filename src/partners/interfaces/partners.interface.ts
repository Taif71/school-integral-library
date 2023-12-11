export interface IPartner {
  readonly _id: string;
  readonly title: string;
  readonly accessKey: string;
  readonly secretKey: string;
  readonly keyExpiresAt: number;
  readonly isActive: boolean;
  readonly isDeleted: boolean;
  readonly cTime: number;
  readonly cBy: string;
}
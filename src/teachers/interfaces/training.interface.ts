import { IMedia } from "../../common";

export interface ITraining {
    readonly _id: string;
    readonly hasCertificate: string;
    readonly category: string;
    readonly startDate: number;
    readonly endDate: number;
    readonly file: IMedia;
    readonly isDeleted: boolean;
  }
  
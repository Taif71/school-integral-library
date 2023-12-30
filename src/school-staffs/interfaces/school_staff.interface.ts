import { IUser } from "../../users/interfaces";
import { IMobile } from "../../common";
import { ISchool } from "../../schools/interfaces/school.interface";

export interface ISchoolStaff {
    readonly _id: string;
    readonly school: ISchool;
    readonly user: IUser;
    readonly type: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly mobile: IMobile;
    readonly nin: string;
    readonly isDeleted: boolean;
  }
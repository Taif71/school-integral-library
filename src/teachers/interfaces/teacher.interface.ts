import { ILocation, IMedia, IMobile } from "src/common";
import { IEducation } from "./education.interface";
import { IExperience } from "./experience.schema";
import { ITraining } from "./training.interface";

export interface ITeacher {
    readonly _id: string;
    readonly firstName: string;
    readonly middleName: string;
    readonly lastName: string;
    readonly dob: number;
    readonly gender: string;
    readonly religion: string;
    readonly nationality: string;
    readonly maritalStatus: string;
    readonly typeOfEmployer: string;
    readonly mobile: IMobile;
    readonly email: string;
    readonly nin: string;
    readonly trcnNumber: string;
    readonly trcNo: string;
    readonly yearOfEmployment: number;
    readonly currentGradeLevel: string;
    readonly teacherId: string;
    readonly issuingInstitution: string;
    readonly typeOfAppoinment: string;
    readonly passportPhoto: IMedia;
    readonly address: ILocation;
    readonly genotype: string;
    readonly bloodGroup: string;
    readonly weight: string;
    readonly height: string;
    readonly medicalCondition: string;
    readonly academicQualifications: IEducation[];
    readonly tertiaryEducations: IEducation[];
    readonly teachingQualifications: IEducation[];
    readonly experiences: IExperience[];
    readonly specializedSkills: string[];
    readonly computerSkills: string[];
    readonly languageProficiency: string[];
    readonly training: ITraining[];
    readonly signature: IMedia;
    readonly date: number;
    readonly isDeleted: boolean;
    readonly cTime: number;
    readonly cBy: string;
    readonly uTime: number;
    readonly uBy: string;
  }
  
export interface IExperience {
    readonly _id: string;
    readonly totalNumberOfYears: number;
    readonly school: string;
    readonly position: string;
    readonly startDate: number;
    readonly endDate: number;
    readonly isStillWorking: boolean;
    readonly isDeleted: boolean;
  }
  
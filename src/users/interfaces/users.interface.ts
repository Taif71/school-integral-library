import { IMobile } from "../../common/interfaces";

export interface IUser {
    readonly _id: string;
    readonly email: string;
    readonly password: string;
    readonly otp: number;
    readonly otpExpiresAt: number;
    readonly emailProofToken: string;
    readonly emailProofTokenExpiresAt: number;
    readonly passwordResetToken: string;
    readonly passwordResetTokenExpiresAt: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly mobile: IMobile;
    readonly isActive: boolean;
    readonly isAdmin: boolean;
    readonly isSuperAdmin: boolean;
    readonly isVerified: boolean;
    readonly isRegistered: boolean;
    readonly agreementOfDataPolicy: boolean;
    readonly consentForDataDocumentation: boolean;
    readonly consentForDataProtection: boolean;
    readonly isDeleted: boolean;
    readonly cTime: number;
    readonly cBy: string;
    readonly uTime: number;
    readonly uBy: string;
}

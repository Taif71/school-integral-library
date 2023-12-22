import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { LocationDocument, LocationSchema, MediaDocument, MediaSchema, MobileDocument, MobileSchema } from '../../common';
import { Education, EducationSchema } from './education.schema';
import { Experience, ExperienceSchema } from './experience.schema';
import { Training, TrainingSchema } from './training.schema';

export type TeacherDocument = Teacher & Document;

@Schema({
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
})
export class Teacher {
    @Prop({
        minlength: 3,
        maxlength: 30,
    })
    firstName: string;

    @Prop({
        minlength: 3,
        maxlength: 30,
        required: false,
    })
    middleName: string;

    @Prop({
        minlength: 3,
        maxlength: 30,
    })
    lastName: string;

    @Prop()
    dob: number;

    @Prop()
    gender: string;

    @Prop()
    religion: string;

    @Prop()
    nationality: string;

    @Prop()
    maritalStatus: string;

    @Prop()
    typeofEmployer: string;

    @Prop({
        type: MobileSchema,
    })
    mobile: MobileDocument;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ unique: true })
    nin: string;

    @Prop()
    trcnNumber: string;

    @Prop()
    trcNo: string;

    @Prop()
    yearOfEmployment: number;

    @Prop()
    currentGradeLevel: string;

    @Prop({ unique: true })
    teacherId: string;

    @Prop()
    issuingInstitution: string;

    @Prop()
    typeOfAppoinment: string;

    @Prop({
        type: MediaSchema,
    })
    passportPhoto: MediaDocument;

    @Prop({
        type: LocationSchema,
    })
    address: LocationDocument;

    @Prop()
    genotype: string;

    @Prop()
    bloodGroup: string;

    @Prop()
    weight: string;

    @Prop()
    height: string;

    @Prop()
    medicalCondition: string;

    @Prop({
        type: [EducationSchema],
        default: undefined
    })
    academicQualifications: Education[];

    @Prop({
        type: [EducationSchema],
        default: undefined
    })
    tertiaryEducations: Education[];

    @Prop({
        type: [EducationSchema],
        default: undefined
    })
    teachingQualifications: Education[];

    @Prop({
        type: [ExperienceSchema],
        default: undefined
    })
    experiences: Experience[];

    @Prop({
        default: undefined
    })
    specializedSkills: string[];

    @Prop({
        default: undefined
    })
    computerSkills: string[];

    @Prop({
        default: undefined
    })
    languageProficiency: string[];

    @Prop({
        type: [TrainingSchema],
        default: undefined
    })
    training: Training[];

    @Prop({
        type: MediaSchema,
    })
    signature: MediaDocument;

    @Prop()
    date: number;

    @Prop({ default: false })
    isDeleted: boolean;

    @Prop({ default: Date.now() })
    cTime: number;

    @Prop()
    cBy: string;

    @Prop({ default: Date.now() })
    uTime: number;

    @Prop()
    uBy: string;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { LocationDocument, LocationSchema, MediaDocument, MediaSchema, MobileDocument, MobileSchema } from '../../common';
import { GuardianDocument, GuardianSchema } from './guardian.schema';

export type StudentDocument = Student & Document;

@Schema({
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
})
export class Student {
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

    @Prop({ required: true, unique: true })
    email: string;

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
    allergies: string;

    @Prop()
    chronicHealthCondition: string;

    @Prop()
    specialNeeds: string;

    @Prop()
    isAvailableVaccinationCard: boolean;

    @Prop({
        default: undefined
    })
    availableCards: string[];

    @Prop({
        type: [GuardianSchema],
        default: undefined
    })
    guardians: [GuardianDocument];

    @Prop({
        type: GuardianSchema
    })
    emergencyContact: GuardianDocument;

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

export const StudentSchema = SchemaFactory.createForClass(Student);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { MobileDocument, MobileSchema } from '../../common/schemas';
import { MODELS } from 'src/common';
import { School } from '../../schools/schemas/school.schema';
import { User } from '../../users/schemas';

export type SchoolStaffDocument = SchoolStaff & Document;

@Schema({
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
})
export class SchoolStaff {
    @Prop({
        type: SchemaTypes.ObjectId,
        ref: MODELS.SCHOOL,
        required: true,
        immutable: true,
    })
    school: School;

    @Prop({
        type: SchemaTypes.ObjectId,
        ref: MODELS.USERS,
        required: true,
    })
    user: User;

    @Prop() // type should be the following enum: head, admin
    type: string;

    @Prop({
        minlength: 3,
        maxlength: 30,
    })
    firstName: string;

    @Prop({
        minlength: 3,
        maxlength: 30,
    })
    lastName: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({
        type: MobileSchema,
    })
    mobile: MobileDocument;

    @Prop({ required: true })
    nin: string;

    @Prop({ default: true })
    isActive: boolean;

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

export const SchoolStaffSchema = SchemaFactory.createForClass(SchoolStaff);

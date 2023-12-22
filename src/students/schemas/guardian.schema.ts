import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { LocationDocument, LocationSchema, MediaDocument, MediaSchema, MobileDocument, MobileSchema } from '../../common';

export type GuardianDocument = Guardian & Document;

@Schema({
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
})
export class Guardian {
    @Prop({
        minlength: 3,
        maxlength: 30,
    })
    fullName: string;

    @Prop()
    age: number;

    @Prop()
    gender: string;

    @Prop()
    relationship : string;

    @Prop({
        type: MobileSchema,
    })
    mobile: MobileDocument;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop()
    occupation: string;

    @Prop()
    nin: string;

    @Prop()
    address: string;
}

export const GuardianSchema = SchemaFactory.createForClass(Guardian);

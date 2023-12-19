import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
    MediaDocument,
    MediaSchema,
    MobileDocument,
    MobileSchema
} from '../../common/schemas';

export type AttestationDocument = Attestation & Document;

@Schema({
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
})
export class Attestation {
    @Prop({ required: true })
    name: string;

    @Prop()
    designation: string;

    @Prop()
    date: number;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({
        type: MobileSchema,
    })
    mobile: MobileDocument;

    @Prop({
        type: MediaSchema,
    })
    Signature: MediaDocument;

    @Prop({ default: false })
    isDeleted: boolean;
}

export const AttestationSchema = SchemaFactory.createForClass(Attestation);

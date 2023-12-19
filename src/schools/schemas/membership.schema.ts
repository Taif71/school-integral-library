import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MediaDocument, MediaSchema } from '../../common/schemas';

export type MembershipDocument = Membership & Document;

@Schema({
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
})
export class Membership {
    @Prop({ required: true })
    namey: string;

    @Prop()
    yearOfMembership: number;

    @Prop({
        type: MediaSchema,
    })
    file: MediaDocument;

    @Prop({ default: false })
    isDeleted: boolean;
}

export const MembershipSchema = SchemaFactory.createForClass(Membership);

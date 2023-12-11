import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PartnerDocument = Partner & Document;

@Schema()
export class Partner {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true, unique: true })
    accessKey: string;

    @Prop({ required: true, unique: true })
    secretKey: string;

    @Prop()
    keyExpiresAt: number;

    @Prop({ default: true })
    isActive: boolean;

    @Prop({ default: false })
    isDeleted: boolean;

    @Prop({ default: Date.now() })
    cTime: number;

    @Prop()
    cBy: string;
}

export const PartnerSchema = SchemaFactory.createForClass(Partner);

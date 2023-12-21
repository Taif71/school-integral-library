import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type ArmDocument = Arm & Document;

@Schema({
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
})
export class Arm {
    @Prop()
    name: string;

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

export const ArmSchema = SchemaFactory.createForClass(Arm);

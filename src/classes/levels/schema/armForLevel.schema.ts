import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Arm } from '../../arms/schemas';
import { MODELS } from '../../../common';

export type ArmForLevelDocument = ArmForLevel & Document;

@Schema({
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
})
export class ArmForLevel {
    @Prop({
        type: SchemaTypes.ObjectId,
        ref: MODELS.ARMS,
        required: true,
        immutable: true,
    })
    arm: Arm;

    @Prop()
    room: number;

    @Prop({ default: false })
    isDeleted: boolean;
}

export const ArmForLevelSchema = SchemaFactory.createForClass(ArmForLevel);

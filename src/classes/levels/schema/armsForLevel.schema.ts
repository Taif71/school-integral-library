import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Arms } from '../../arms/schemas';
import { MODELS } from '../../../common';

export type ArmsForLevelDocument = ArmsForLevel & Document;

@Schema({
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
})
export class ArmsForLevel {
    @Prop({
        type: SchemaTypes.ObjectId,
        ref: MODELS.ARMS,
        required: true,
        immutable: true,
    })
    arms: Arms;

    @Prop()
    room: number;

    @Prop({ default: false })
    isDeleted: boolean;
}

export const ArmsForLevelSchema = SchemaFactory.createForClass(ArmsForLevel);

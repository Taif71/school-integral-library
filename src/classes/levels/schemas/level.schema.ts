import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { ArmForLevel, ArmForLevelSchema } from './armForLevel.schema';
import { School } from '../../../schools/schemas';
import { MODELS } from 'src/common';

export type LevelDocument = Level & Document;

@Schema({
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
})
export class Level {
  @Prop({
    type: SchemaTypes.ObjectId,
    ref: MODELS.SCHOOL,
    required: true,
  })
  school: School;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  category: string;

  @Prop()
  year: number;

  @Prop()
  assessmentFormat: string;

  @Prop()
  gradingFormat: string;

  @Prop({
    type: [ArmForLevelSchema],
    default: undefined
  })
  arms: ArmForLevel[];

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

export const LevelSchema = SchemaFactory.createForClass(Level);

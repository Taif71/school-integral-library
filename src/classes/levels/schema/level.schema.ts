import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ArmForLevel, ArmForLevelSchema } from './armForLevel.schema';

export type LevelDocument = Level & Document;

@Schema({
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
})
export class Level {
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

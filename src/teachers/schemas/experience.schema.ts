import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExperienceDocument = Experience & Document;

@Schema()
export class Experience {
  @Prop()
  totalNumberOfYears: number;

  @Prop()
  school: string;

  @Prop()
  position: string;

  @Prop()
  startDate: number;

  @Prop()
  endDate: number;

  @Prop()
  isStillWorking: boolean;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);

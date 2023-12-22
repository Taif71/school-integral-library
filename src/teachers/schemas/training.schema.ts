import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TrainingDocument = Training & Document;

@Schema()
export class Training {
  @Prop()
  certification: string;

  @Prop()
  category: string;

  @Prop()
  startDate: number;

  @Prop()
  endDate: number;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const TrainingSchema = SchemaFactory.createForClass(Training);

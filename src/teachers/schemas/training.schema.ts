import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { 
  CurriculamDocument, 
  CurriculamSchema, 
  MediaDocument, 
  MediaSchema 
} from '../../common';

export type TrainingDocument = Training & Document;

@Schema()
export class Training {
  @Prop()
  hasCertificate: boolean;

  @Prop()
  category: string;

  @Prop()
  startDate: number;

  @Prop()
  endDate: number;

  @Prop({
    type: MediaSchema,
  })
  file: MediaDocument;

  @Prop({
    type: CurriculamSchema,
  })
  curriculam: CurriculamDocument;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const TrainingSchema = SchemaFactory.createForClass(Training);

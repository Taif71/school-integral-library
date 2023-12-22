import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EducationDocument = Education & Document;

@Schema()
export class Education {
  @Prop()
  certification: string;

  @Prop()
  areaOfStudy: string;

  @Prop()
  Institution: string;

  @Prop()
  yearOfGraduation: number;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const EducationSchema = SchemaFactory.createForClass(Education);

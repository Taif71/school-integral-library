import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CurriculamDocument = Curriculam & Document;

@Schema()
export class Curriculam {
  @Prop()
  prePrimary: string[];

  @Prop()
  primary: string[];

  @Prop()
  jss1_3: string[];

  @Prop()
  sss1_3: string[];

  @Prop()
  technology: string[];

  @Prop()
  tradeAndEntrepreneurship: string[];

  @Prop({ default: false })
  isDeleted: boolean;
}

export const CurriculamSchema = SchemaFactory.createForClass(Curriculam);

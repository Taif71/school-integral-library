import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MediaDocument, MediaSchema } from '../../common/schemas';

export type ComplianceDocument = Compliance & Document;

@Schema({
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
})
export class Compliance {
  @Prop({ required: true })
  nameOfBody: string;

  @Prop()
  dateOfApproval: number;

  @Prop()
  duration: number;       // in years

  @Prop({
    type: MediaSchema,
  })
  file: MediaDocument;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const ComplianceSchema = SchemaFactory.createForClass(Compliance);

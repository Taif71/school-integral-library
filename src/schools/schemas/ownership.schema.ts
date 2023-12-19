import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MobileDocument, MobileSchema } from '../../common/schemas';

export type SchoolOwnershipDocument = SchoolOwnership & Document;

@Schema({
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
})
export class SchoolOwnership {
  @Prop({ required: true })
  legalName: string;

  @Prop({
    type: MobileSchema,
  })
  mobile: MobileDocument;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  cac_rcNumber: string;

  @Prop({ required: true })
  yearOfEstablishment: number;

  @Prop()
  recognitionStatus: number;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const SchoolOwnershipSchema = SchemaFactory.createForClass(SchoolOwnership);

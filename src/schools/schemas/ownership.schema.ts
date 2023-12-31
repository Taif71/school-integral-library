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

  @Prop({ required: true })
  email: string;

  @Prop()
  cac_rcNumber: string;

  @Prop()
  yearOfEstablishment: number;

  @Prop()
  recognitionStatus: string;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const SchoolOwnershipSchema = SchemaFactory.createForClass(SchoolOwnership);

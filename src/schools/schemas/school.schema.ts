import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { LocationDocument, LocationSchema } from '../../common/schemas';
import { SchoolOwnershipDocument, SchoolOwnershipSchema } from './ownership.schema';

export type SchoolDocument = School & Document;

@Schema({
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
})
export class School {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  ownershipType: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  code: string;

  @Prop()
  additionalId: number;

  @Prop({
    type: LocationSchema,
  })
  address: LocationDocument;

  @Prop({
    type: SchoolOwnershipSchema,
  })
  ownership: SchoolOwnershipDocument;

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

export const SchoolSchema = SchemaFactory.createForClass(School);

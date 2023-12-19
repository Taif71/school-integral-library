import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { LocationDocument, LocationSchema } from '../../common/schemas';
import { 
  SchoolOwnershipDocument, 
  SchoolOwnershipSchema 
} from './ownership.schema';
import {
  ComplianceDocument,
  ComplianceSchema
} from './compliance.schema';
import {
  MembershipDocument,
  MembershipSchema
} from './membership.schema';
import {
  AttestationDocument,
  AttestationSchema
} from './attestation.schema';
import { CATEGORY, OWNERSHIP, TYPE } from '../../common';

export type SchoolDocument = School & Document;

@Schema({
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
})
export class School {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true, enum: OWNERSHIP })
  ownershipType: string;

  @Prop({ required: true, enum: CATEGORY })
  category: string;

  @Prop({ required: true, enum: TYPE })
  type: string;

  @Prop({ required: true })
  code: string;

  @Prop()
  additionalId: string;

  @Prop({
    type: LocationSchema,
  })
  address: LocationDocument;

  @Prop({
    type: SchoolOwnershipSchema,
  })
  ownership: SchoolOwnershipDocument;

  @Prop()
  curriculams: string[];

  @Prop()
  specialPrograms: string[];

  @Prop({
    type: ComplianceSchema,
  })
  approval: ComplianceDocument;

  @Prop({
    type: ComplianceSchema,
  })
  license: ComplianceDocument;

  @Prop({
    type: ComplianceSchema,
  })
  curriculamLicense: ComplianceDocument;

  @Prop({
    type: MembershipSchema,
  })
  associationMembership: MembershipDocument;

  @Prop({
    type: AttestationSchema,
  })
  attestation: AttestationDocument;  

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

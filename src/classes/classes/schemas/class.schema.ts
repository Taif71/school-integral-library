import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { MODELS } from '../../../common';
import { Level } from '../../levels/schemas';
import { Arm } from '../../arms/schemas';
import { Teacher } from '../../../teachers/schemas';
import { Student } from '../../../students/schemas';
import { School } from '../../../schools/schemas';


export type ClassDocument = Class & Document;

@Schema({
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
})
export class Class {
  @Prop({
    required: true,
    unique: true
  })
  code: string;
  
  @Prop({
    type: SchemaTypes.ObjectId,
    ref: MODELS.SCHOOL,
    required: true,
  })
  school: School;

  @Prop({
    type: SchemaTypes.ObjectId,
    ref: MODELS.LEVELS,
    required: true,
    immutable: true,
  })
  level: Level;

  @Prop({
    type: SchemaTypes.ObjectId,
    ref: MODELS.ARMS,
    required: true,
    immutable: true,
  })
  arm: Arm;

  @Prop()
  room: number;

  @Prop({
    type: SchemaTypes.ObjectId,
    ref: MODELS.TEACHERS,
  })
  classTeacher: Teacher;

  @Prop({
    type: [SchemaTypes.ObjectId],
    ref: MODELS.STUDENTS,
    default: undefined,
  })
  students: Student[];

  @Prop({ default: true })
  isActive: boolean;

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

export const ClassSchema = SchemaFactory.createForClass(Class);

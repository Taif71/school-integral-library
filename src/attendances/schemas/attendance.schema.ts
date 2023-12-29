import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { MODELS } from '../../common';
import { Class } from '../../classes/classes/schemas';
import { Student } from '../../students/schemas';

export type AttendanceDocument = Attendance & Document;

@Schema({
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
})
export class Attendance {
  @Prop({
    type: SchemaTypes.ObjectId,
    ref: MODELS.CLASSES,
    required: true,
  })
  class: Class;

  @Prop({ required: true })
  date: number;

  @Prop({
    type: [SchemaTypes.ObjectId],
    ref: MODELS.STUDENTS,
    default: undefined,
  })
  presentStudents: Student[];

  @Prop({
    type: [SchemaTypes.ObjectId],
    ref: MODELS.STUDENTS,
    default: undefined,
  })
  absentStudents: Student[];

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

export const AttendanceSchema = SchemaFactory.createForClass(Attendance);

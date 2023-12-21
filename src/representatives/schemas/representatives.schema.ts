import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { User } from '../../users/schemas';
import { MODELS } from '../../common';
import { State } from '../../demographics/schemas';

export type RepresentativeDocument = Representative & Document;

@Schema()
export class Representative {
    @Prop({
        type: SchemaTypes.ObjectId,
        ref: MODELS.USERS,
        unique: true,
        required: true,
        immutable: true,
    })
    user: User;

    @Prop({
        type: SchemaTypes.ObjectId,
        ref: MODELS.STATES,
    })
    state: State;

    @Prop({ default: false })
    isStateRepresentative: boolean; 
    
    @Prop({ default: false })
    isOrganizationRepresentative: boolean; 

    @Prop({ default: false })
    isEdtechRepresentative: boolean; 

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

export const RepresentativeSchema = SchemaFactory.createForClass(Representative);

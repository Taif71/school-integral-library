import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { CountryDocument, StateDocument, CityDocument } from '../../demographics/schemas';
import { MODELS } from '../constants';

export type LocationDocument = Location & Document;

@Schema()
export class Location {
  @Prop()
  locationType: string;

  @Prop()
  area: string;

  @Prop({
    maxlength: 300,
  })
  address: string;

  @Prop({
    type: SchemaTypes.ObjectId,
    ref: MODELS.CITIES,
  })
  localGovnArea: CityDocument;

  @Prop({
    type: SchemaTypes.ObjectId,
    ref: MODELS.STATES,
  })
  state: StateDocument;

  @Prop({
    type: SchemaTypes.ObjectId,
    ref: MODELS.COUNTRIES,
  })
  country: CountryDocument;

  @Prop()
  town: string;

  @Prop()
  zipCode: string;

  @Prop()
  avgDistancefromCatchmentAreas: number;

  @Prop()
  landmark: string;

  @Prop()
  description: string;

  @Prop()
  lat: number;

  @Prop()
  lng: number;

  @Prop({
    enum: ['Point'],
    required: true,
    default: 'Point',
  })
  type: string;

  @Prop({
    required: false,
    index: '2dsphere',
  })
  coordinates: number[];

  @Prop({ default: false })
  isDeleted: boolean;
}

export const LocationSchema = SchemaFactory.createForClass(Location);

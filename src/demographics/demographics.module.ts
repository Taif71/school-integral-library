import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CountrySchema, StateSchema, CitySchema } from './schemas';
import { MODELS } from '../common/constants';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: MODELS.COUNTRIES, schema: CountrySchema },
            { name: MODELS.STATES, schema: StateSchema },
            { name: MODELS.CITIES, schema: CitySchema },
        ]),
    ],
})
export class DemographicsModule { }

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PartnerSchema } from './schemas';
import { MODELS } from '../common/constants';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MODELS.PARTNERS, schema: PartnerSchema },
    ]),
  ],
  controllers: [],
  providers: []
})
export class PartnersModule {}

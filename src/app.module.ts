import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PartnersModule } from './partners/partners.module';
import 'dotenv/config';
import { UsersModule } from './users/users.module';
import { DemographicsModule } from './demographics/demographics.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_MONGO),
    PartnersModule,
    UsersModule,
    DemographicsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

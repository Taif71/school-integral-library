import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas';
import { MODELS } from '../common/constants'


@Module({
    imports: [
        MongooseModule.forFeature([
            { name: MODELS.USERS, schema: UserSchema },
        ]),
    ],
    controllers: [],
    providers: []
})
export class UsersModule { }

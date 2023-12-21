import {
    IsMongoId,
    IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ArmForLevelDTO implements Readonly<ArmForLevelDTO> {
    @ApiProperty()
    @IsString()
    @IsMongoId()
    arm: string;

    @ApiProperty()
    room: number;

    @ApiProperty()
    isDeleted: boolean;
}

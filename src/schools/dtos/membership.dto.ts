import {
    IsString,
    ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IMedia, MediaDTO, MobileDTO } from 'src/common';

export class MembershipDTO implements Readonly<MembershipDTO> {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    yearOfMembership: number;

    @ApiProperty({
        type: MediaDTO,
    })
    @ValidateNested({ each: true })
    @Type(() => MediaDTO)
    file: IMedia;

    @ApiProperty()
    isDeleted: boolean;
}

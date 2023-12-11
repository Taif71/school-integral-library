import {
    IsString,
    IsNotEmpty,
} from 'class-validator';

export class CreatePartnerDTO implements Readonly<CreatePartnerDTO> {
    @IsNotEmpty()
    @IsString()
    title: string;
}
import { PartialType } from '@nestjs/swagger';
import { CreatePartnerDTO } from './create.dto';

export class UpdatePartnerDTO extends PartialType(CreatePartnerDTO) {}

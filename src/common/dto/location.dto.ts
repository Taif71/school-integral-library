import {
  IsArray,
  IsMongoId,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  IsEnum
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Location_Type, Location_Area } from '../../common'

export class LocationDTO implements Readonly<LocationDTO> {
  @ApiProperty({
    enum: Location_Type,
  })
  @IsEnum(Location_Type)
  locationType: string;

  @ApiProperty({
    enum: Location_Area,
  })
  @IsEnum(Location_Area)
  area: string;

  @ApiProperty()
  @MinLength(2)
  @MaxLength(300)
  @IsString()
  address: string;

  @ApiProperty()
  @IsMongoId()
  localGovnArea: string;

  @ApiProperty()
  @IsMongoId()
  state: string;

  @ApiProperty()
  @IsMongoId()
  country: string;

  @ApiProperty()
  town: string;

  @ApiProperty()
  @IsString()
  zipCode: string;

  @ApiProperty()
  avgDistancefromCatchmentAreas: number;

  @ApiProperty()
  landmark: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  lat: number;

  @ApiProperty()
  lng: number;

  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsArray()
  @IsOptional()
  coordinates: number[];

  @ApiProperty()
  isDeleted: boolean;
}

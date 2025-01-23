import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  client: string;

  @IsNotEmpty()
  @IsString()
  work: string;

  @IsNotEmpty()
  @IsString()
  story: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  mainImage?: string;

  @IsArray()
  @IsString({ each: true })
  otherImages: string[];

  @IsNotEmpty()
  @IsString()
  workFlow: string;
}

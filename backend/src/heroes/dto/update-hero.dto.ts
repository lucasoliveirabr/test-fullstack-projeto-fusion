import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { IsContainedIn } from '../validators/isContainedIn.validator';

export class UpdateHeroDto {
  @Transform(
    ({ value }: TransformFnParams) =>
      typeof value === 'string' && value?.trim(),
  )
  @IsString()
  @IsNotEmpty()
  @Length(1, 30)
  @IsContainedIn()
  name: string;

  @Transform(
    ({ value }: TransformFnParams) =>
      typeof value === 'string' && value?.trim(),
  )
  @IsString()
  @IsNotEmpty()
  @Length(1, 750)
  powersAndAbilities: string;

  @Transform(
    ({ value }: TransformFnParams) =>
      typeof value === 'string' && value?.trim(),
  )
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  origin: string;
}

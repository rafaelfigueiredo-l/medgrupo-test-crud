import {
  IsNotEmpty,
  IsIn,
  IsOptional,
  MinLength,
  IsDateString,
  Max,
  Min,
  IsNumber,
} from 'class-validator';
import { Genre } from '../enum/genre.enum';
import { Type } from 'class-transformer';

//cada item pode ter mensagem customizada
export class CreateContactDto {
  @MinLength(3, {
    message: 'Por favor, adicione um nome com mais de 2 letras.',
  })
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsDateString()
  date_of_birth: Date;

  @IsOptional()
  @IsIn([Genre.FEMALE, Genre.MALE])
  genre: Genre;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(100)
  age: number;
}

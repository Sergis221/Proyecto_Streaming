import { IsString, IsInt, IsDate } from 'class-validator';

export class CreateContenidoDto {
  @IsString()
  nombre: string;

  @IsString()
  tipo: string; // 'pelicula' o 'serie'

  @IsString()
  genero: string;

  @IsInt()
  duracion: number;

  @IsDate()
  fecha: Date;

  @IsString()
  productor: string;
}

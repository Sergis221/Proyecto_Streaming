import { Module } from '@nestjs/common';
import { PeliculaService } from './pelicula.service';
import { PeliculaController } from './pelicula.controller';

@Module({
  providers: [PeliculaService],
  controllers: [PeliculaController]
})
export class PeliculaModule {}

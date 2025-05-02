import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContenidoModule } from './contenido/contenido.module';
import { PeliculaModule } from './pelicula/pelicula.module';
import { SerieModule } from './serie/serie.module';
import { PrismaService } from './prisma/prisma/prisma.service';

@Module({
  imports: [ContenidoModule, PeliculaModule, SerieModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

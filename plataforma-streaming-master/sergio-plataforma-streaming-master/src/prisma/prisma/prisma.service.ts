import { Injectable } from '@nestjs/common';
import { PrismaClient as PrismaContenido } from '@prisma/client'; // DB1
import { PrismaClient as PrismaPelicula } from '@prisma/pelicula-client';    // DB3

@Injectable()
export class PrismaService {
  contenido = new PrismaContenido();
  pelicula = new PrismaPelicula();
  serie = new PrismaSerie();
}

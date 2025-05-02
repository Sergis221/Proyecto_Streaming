import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service'; // ¡Cuidado! era un prisma/prisma de más

@Injectable()
export class ContenidoService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.contenido.findMany();
  }

  async findOne(id: number) {
    return this.prisma.contenido.findUnique({ where: { id } });
  }

  async create(data: { titulo: string, descripcion: string }) {
    return this.prisma.contenido.create({ data });
  }

  async update(id: number, data: { titulo?: string, descripcion?: string }) {
    return this.prisma.contenido.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.contenido.delete({ where: { id } });
  }
}

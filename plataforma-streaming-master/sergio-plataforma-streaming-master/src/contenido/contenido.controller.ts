import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ContenidoService } from './contenido.service';
import { CreateContenidoDto } from './dto/create-contenido.dto';  // DTO para validación de datos
import { UpdateContenidoDto } from './dto/update-contenido.dto'; // DTO para actualización de contenido
import { ApiTags } from '@nestjs/swagger';

@ApiTags('contenido') // Esto es para Swagger (opcional)
@Controller('contenido')
export class ContenidoController {
  constructor(private readonly contenidoService: ContenidoService) {}

  // Ruta para obtener todos los contenidos
  @Get()
  async findAll() {
    return this.contenidoService.findAll();
  }

  // Ruta para obtener un solo contenido por ID
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.contenidoService.findOne(id);
  }

  // Ruta para crear un nuevo contenido
  @Post()
  async create(@Body() createContenidoDto: CreateContenidoDto) {
    return this.contenidoService.create(createContenidoDto);
  }

  // Ruta para actualizar un contenido
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateContenidoDto: UpdateContenidoDto) {
    return this.contenidoService.update(id, updateContenidoDto);
  }

  // Ruta para eliminar un contenido
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.contenidoService.remove(id);
  }
}

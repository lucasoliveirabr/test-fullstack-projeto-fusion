import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  ParseIntPipe,
  Delete,
  Ip,
  ValidationPipe,
} from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { LoggerService } from 'src/logger/logger.service';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}
  private readonly logger = new LoggerService(HeroesController.name);

  @Post()
  create(@Ip() ip: string, @Body(ValidationPipe) createHeroDto: CreateHeroDto) {
    this.logger.log(
      `POST /api/heroes\t${JSON.stringify(createHeroDto)}`,
      HeroesController.name,
      ip,
    );
    return this.heroesService.create(createHeroDto);
  }

  @Get()
  findAll(@Ip() ip: string) {
    this.logger.log(`GET /api/heroes`, HeroesController.name, ip);
    return this.heroesService.findAll();
  }

  @Put(':id')
  update(
    @Ip() ip: string,
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateHeroDto: UpdateHeroDto,
  ) {
    this.logger.log(
      `PUT /api/heroes/${id}\t${JSON.stringify(updateHeroDto)}`,
      HeroesController.name,
      ip,
    );
    return this.heroesService.update(id, updateHeroDto);
  }

  @Delete(':id')
  remove(@Ip() ip: string, @Param('id', ParseIntPipe) id: number) {
    this.logger.log(`DELETE /api/heroes/${id}`, HeroesController.name, ip);
    return this.heroesService.remove(id);
  }
}

import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';

@Injectable()
export class HeroesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createHeroDto: CreateHeroDto) {
    return this.databaseService.hero.create({
      data: createHeroDto,
    });
  }

  async findAll() {
    return this.databaseService.hero.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  async update(id: number, updateHeroDto: UpdateHeroDto) {
    return this.databaseService.hero.update({
      where: {
        id,
      },
      data: updateHeroDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.hero.delete({
      where: {
        id,
      },
    });
  }
}

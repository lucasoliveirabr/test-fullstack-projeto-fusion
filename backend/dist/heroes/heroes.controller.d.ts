import { HeroesService } from './heroes.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
export declare class HeroesController {
    private readonly heroesService;
    constructor(heroesService: HeroesService);
    private readonly logger;
    create(ip: string, createHeroDto: CreateHeroDto): Promise<{
        name: string;
        powersAndAbilities: string;
        origin: string;
        id: number;
    }>;
    findAll(ip: string): Promise<{
        name: string;
        powersAndAbilities: string;
        origin: string;
        id: number;
    }[]>;
    update(ip: string, id: number, updateHeroDto: UpdateHeroDto): Promise<{
        name: string;
        powersAndAbilities: string;
        origin: string;
        id: number;
    }>;
    remove(ip: string, id: number): Promise<{
        name: string;
        powersAndAbilities: string;
        origin: string;
        id: number;
    }>;
}

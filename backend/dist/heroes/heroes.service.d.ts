import { DatabaseService } from 'src/database/database.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
export declare class HeroesService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createHeroDto: CreateHeroDto): Promise<{
        name: string;
        powersAndAbilities: string;
        origin: string;
        id: number;
    }>;
    findAll(): Promise<{
        name: string;
        powersAndAbilities: string;
        origin: string;
        id: number;
    }[]>;
    update(id: number, updateHeroDto: UpdateHeroDto): Promise<{
        name: string;
        powersAndAbilities: string;
        origin: string;
        id: number;
    }>;
    remove(id: number): Promise<{
        name: string;
        powersAndAbilities: string;
        origin: string;
        id: number;
    }>;
}

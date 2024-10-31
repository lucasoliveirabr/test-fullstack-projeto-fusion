"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroesService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let HeroesService = class HeroesService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async create(createHeroDto) {
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
    async update(id, updateHeroDto) {
        return this.databaseService.hero.update({
            where: {
                id,
            },
            data: updateHeroDto,
        });
    }
    async remove(id) {
        return this.databaseService.hero.delete({
            where: {
                id,
            },
        });
    }
};
exports.HeroesService = HeroesService;
exports.HeroesService = HeroesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], HeroesService);
//# sourceMappingURL=heroes.service.js.map
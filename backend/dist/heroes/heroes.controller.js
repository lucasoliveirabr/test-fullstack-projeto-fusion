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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var HeroesController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroesController = void 0;
const common_1 = require("@nestjs/common");
const heroes_service_1 = require("./heroes.service");
const create_hero_dto_1 = require("./dto/create-hero.dto");
const update_hero_dto_1 = require("./dto/update-hero.dto");
const logger_service_1 = require("../logger/logger.service");
let HeroesController = HeroesController_1 = class HeroesController {
    constructor(heroesService) {
        this.heroesService = heroesService;
        this.logger = new logger_service_1.LoggerService(HeroesController_1.name);
    }
    create(ip, createHeroDto) {
        this.logger.log(`POST /api/heroes\t${JSON.stringify(createHeroDto)}`, HeroesController_1.name, ip);
        return this.heroesService.create(createHeroDto);
    }
    findAll(ip) {
        this.logger.log(`GET /api/heroes`, HeroesController_1.name, ip);
        return this.heroesService.findAll();
    }
    update(ip, id, updateHeroDto) {
        this.logger.log(`PUT /api/heroes/${id}\t${JSON.stringify(updateHeroDto)}`, HeroesController_1.name, ip);
        return this.heroesService.update(id, updateHeroDto);
    }
    remove(ip, id) {
        this.logger.log(`DELETE /api/heroes/${id}`, HeroesController_1.name, ip);
        return this.heroesService.remove(id);
    }
};
exports.HeroesController = HeroesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Ip)()),
    __param(1, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_hero_dto_1.CreateHeroDto]),
    __metadata("design:returntype", void 0)
], HeroesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Ip)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HeroesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Ip)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, update_hero_dto_1.UpdateHeroDto]),
    __metadata("design:returntype", void 0)
], HeroesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Ip)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], HeroesController.prototype, "remove", null);
exports.HeroesController = HeroesController = HeroesController_1 = __decorate([
    (0, common_1.Controller)('heroes'),
    __metadata("design:paramtypes", [heroes_service_1.HeroesService])
], HeroesController);
//# sourceMappingURL=heroes.controller.js.map
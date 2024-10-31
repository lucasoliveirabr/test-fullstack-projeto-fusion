"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsContainedIn = IsContainedIn;
const class_validator_1 = require("class-validator");
const allowedHeroes = [
    'Homem-Aranha',
    'Homem de Ferro',
    'Capitão América',
    'Thor',
    'Hulk',
    'Viúva Negra',
    'Gavião Arqueiro',
    'Pantera Negra',
    'Doutor Estranho',
    'Feiticeira Escarlate',
    'Visão',
    'Falcão',
    'Soldado Invernal',
    'Senhor das Estrelas',
    'Groot',
    'Shang-Chi',
    'Homem-Formiga',
    'Capitã Marvel',
    'Demolidor',
    'Tempestade',
    'Wolverine',
    'Jean Grey',
    'Ciclope',
    'Noturno',
    'Fera',
    'Professor X',
    'Adam Warlock',
    'Deadpool',
    'Surfista Prateado',
    'Valquíria',
    'Mulher-Hulk',
    'Falcão Noturno',
    'Patriota de Ferro',
    'Máquina de Combate',
    'Ms. Marvel',
    'Dominó',
    'Longshot',
    'Wiccano',
    'Hulkling',
    'América Chávez',
    'Sersi',
    'Gilgamesh',
    'Thena',
    'Phastos',
    'Makkari',
    'Ajak',
    'Serpente da Lua',
];
const normalizeString = (str) => {
    return str
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
};
const nameIsContainedInAllowedHeroes = (value) => {
    const normalizedValue = normalizeString(value);
    return allowedHeroes.some(item => normalizedValue.includes(normalizeString(item)));
};
function IsContainedIn(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isContainedIn',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value) {
                    return nameIsContainedInAllowedHeroes(value);
                },
                defaultMessage() {
                    return "O nome precisa incluir uma das seguintes opções: Homem-Aranha, Homem de Ferro, Capitão América, Thor, Hulk, Viúva Negra, Gavião Arqueiro, Pantera Negra, Doutor Estranho, Feiticeira Escarlate, Visão, Falcão, Soldado Invernal, Senhor das Estrelas, Groot, Shang-Chi, Homem-Formiga, Capitã Marvel, Demolidor, Tempestade, Wolverine, Jean Grey, Ciclope, Noturno, Fera, Professor X, Adam Warlock, Deadpool, Surfista Prateado, Valquíria, Mulher-Hulk, Falcão Noturno, Patriota de Ferro, Máquina de Combate, Ms. Marvel, Dominó, Longshot, Wiccano, Hulkling, América Chávez, Sersi, Gilgamesh, Thena, Phastos, Makkari, Ajak, Serpente da Lua.";
                },
            },
        });
    };
}
//# sourceMappingURL=isContainedIn.validator.js.map
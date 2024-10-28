import { registerDecorator, ValidationOptions } from 'class-validator';

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

export function IsContainedIn(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isContainedIn',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string) {
          return allowedHeroes.some(item => value.includes(item));
        },
        defaultMessage() {
          return "O nome precisa incluir uma das seguintes opções: Homem-Aranha, Homem de Ferro, Capitão América, Thor, Hulk, Viúva Negra, Gavião Arqueiro, Pantera Negra, Doutor Estranho, Feiticeira Escarlate, Visão, Falcão, Soldado Invernal, Senhor das Estrelas, Groot, Shang-Chi, Homem-Formiga, Capitã Marvel, Demolidor, Tempestade, Wolverine, Jean Grey, Ciclope, Noturno, Fera, Professor X, Adam Warlock, Deadpool, Surfista Prateado, Valquíria, Mulher-Hulk, Falcão Noturno, Patriota de Ferro, Máquina de Combate, Ms. Marvel, Dominó, Longshot, Wiccano, Hulkling, América Chávez, Sersi, Gilgamesh, Thena, Phastos, Makkari, Ajak, Serpente da Lua.";
        },
      },
    });
  };
}

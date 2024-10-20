import { create } from "zustand";

type HeroProps = {
  id: number;
  name: string;
  powersAndAbilities: string;
  origin: string;
}

type HeroStore = {
  heroList: HeroProps[];
  addHero: (name: string, powersAndAbilities: string, origin: string) => void;
  editHero: (hero: HeroProps) => void;
  deleteHero: (id: number) => void;
}

export const useHeroListDemoStore = create<HeroStore>()((set) => ({
  heroList: [
    {
      id: 1633036800000,
      name: "Doutor Estranho",
      powersAndAbilities: "Magia, Artista Marcial, Manipulação de Energia, Teletransporte, Cronocinese.",
      origin: "Pensilvânia, Estados Unidos da América, Terra."
    },
    {
      id: 1672531199000,
      name: "Homem Aranha",
      powersAndAbilities: "Força sobre-humana, Velocidade sobre-humana, Reflexos sobre-humanos, Durabilidade sobre-humana, Fator de cura, Alerta de Sentido de aranha, Sentidos aguçados, Escalar paredes.",
      origin: "Nova Iorque, Estados Unidos da América, Terra."
    },
    {
      id: 1680307200000,
      name: "Wolverine",
      powersAndAbilities: "Sentidos Aguçados, Regeneração, Força Sobre-Humana, Durabilidade Sobre-Humana, Velocidade Sobre-Humana, Reflexos Sobre-Humanos.",
      origin: "Alberta, Canadá, Terra."
    },
    {
      id: 1691011200000,
      name: "Ciclope",
      powersAndAbilities: "Rajada Ótica, Percepção Espacial, Resistência a Energia, Resistência a Energia.",
      origin: "Alasca, Estados Unidos da América, Terra."
    },
    {
      id: 1700000000000,
      name: "Thor",
      powersAndAbilities: "Força divina, controle do clima, voo, teletransporte (com o Mjolnir).",
      origin: "Asgard."
    },
    {
      id: 1710000000000,
      name: "Surfista Prateado",
      powersAndAbilities: "Poder Cósmico (Viagens pelo Cosmos, Força e Durabilidade Extremas, Explosões de Energia).",
      origin: "Alberta, Canadá, Terra."
    }
  ],
  addHero: (name, powersAndAbilities, origin) => set((state) => ({
    heroList: [...state.heroList, { id: Date.now(), name, powersAndAbilities, origin }]
  })),
  editHero: ({ id, name, powersAndAbilities, origin }) => set((state) => ({
    heroList: state.heroList.map(hero => hero.id === id ? { ...hero, name, powersAndAbilities, origin } : hero)
  })),
  deleteHero: (id) => set((state) => ({
    heroList: state.heroList.filter(hero => hero.id !== id)
  }))
}));
import "./style.css";

// Interfaz
interface GrupoMusical {
  cantante: string;
  año: number;
  activo: boolean;
  genero: string;
}

// Estilos
const estilo = `background-color: green; font-weigth: bold; font-size: 18px`;

// Declarar variables
const popRock: string = "🎵 Pop Rock";
const rock: string = "🎸 Rock";
const hardRock: string = "🤘 Hard Rock";
const classical: string = "🎼 Clásica";

// Variables
const grupoMusicalA: GrupoMusical = {
  cantante: "The Beatles",
  año: 1960,
  activo: true,
  genero: popRock,
};

const grupoMusicalB: GrupoMusical = {
  cantante: "Queen",
  año: 1970,
  activo: false,
  genero: rock,
};

const grupoMusicalC: GrupoMusical = {
  cantante: "AC DC",
  año: 1973,
  activo: true,
  genero: hardRock,
};

const grupoMusicalD: GrupoMusical = {
  cantante: "Ludwig van Beethoven",
  año: 1770,
  activo: false,
  genero: classical,
};

const grupoMusicalE: GrupoMusical = {
  cantante: "The Rolling Stones",
  año: 1962,
  activo: true,
  genero: rock,
};

// Array de grupos musicales
const GrupoMusical: GrupoMusical[] = [
  grupoMusicalA,
  grupoMusicalB,
  grupoMusicalC,
  grupoMusicalD,
  grupoMusicalE,
];

// Console
console.log(GrupoMusical);

// console Estilos
console.log(`%c ${grupoMusicalA.cantante}`, estilo);
console.log(`%c ${grupoMusicalB.cantante}`, estilo);
console.log(`%c ${grupoMusicalC.cantante}`, estilo);
console.log(`%c ${grupoMusicalD.cantante}`, estilo);
console.log(`%c ${grupoMusicalE.cantante}`, estilo);

import { Carro } from "./Carro";

export class Usuario {
  id!: number;              // identificador único do usuário
  nome!: string;            // nome do usuário
  carros: Carro[] = [];     // lista de carros que pertencem ao usuário
}

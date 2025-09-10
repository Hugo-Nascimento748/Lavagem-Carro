import { Carro } from "./Carro";

// Representa uma ordem de serviço de lavagem
export class OrdemServico {
  id!: number;         // identificador único da OS
  carro!: Carro;       // carro que será lavado
  preco: number = 50;  // preço fixo da lavagem
}

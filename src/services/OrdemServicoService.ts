import { OrdemServico } from "../models/OrdemServico";
import { Carro } from "../models/Carro";

// Serviço para gerenciar ordens de serviço (OS)
export class OrdemServicoService {
  private ordens: OrdemServico[] = [];  // lista de ordens registradas
  private contadorId: number = 1;       // contador de IDs para OS

  // Cria uma nova ordem de serviço para um carro
  criarOrdem(carro: Carro) {
    const ordem = new OrdemServico();
    ordem.id = this.contadorId++;
    ordem.carro = carro;
    this.ordens.push(ordem);

    console.log(`Ordem de Serviço criada! ID: ${ordem.id}, Carro: ${carro.modelo}, Preço: R$${ordem.preco}`);
  }

  // Lista todas as ordens de serviço já criadas
  listarOrdens(): OrdemServico[] {
    return this.ordens;
  }
}

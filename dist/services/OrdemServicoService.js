"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdemServicoService = void 0;
const OrdemServico_1 = require("../models/OrdemServico");
// Serviço para gerenciar ordens de serviço (OS)
class OrdemServicoService {
    constructor() {
        this.ordens = []; // lista de ordens registradas
        this.contadorId = 1; // contador de IDs para OS
    }
    // Cria uma nova ordem de serviço para um carro
    criarOrdem(carro) {
        const ordem = new OrdemServico_1.OrdemServico();
        ordem.id = this.contadorId++;
        ordem.carro = carro;
        this.ordens.push(ordem);
        console.log(`Ordem de Serviço criada! ID: ${ordem.id}, Carro: ${carro.modelo}, Preço: R$${ordem.preco}`);
    }
    // Lista todas as ordens de serviço já criadas
    listarOrdens() {
        return this.ordens;
    }
}
exports.OrdemServicoService = OrdemServicoService;

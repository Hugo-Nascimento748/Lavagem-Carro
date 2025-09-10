"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarroService = void 0;
class CarroService {
    constructor() {
        this.contadorId = 1;
        this.carros = [];
    }
    adicionarCarro(carro) {
        carro.id = this.contadorId;
        this.contadorId++;
        this.carros.push(carro);
        console.log(`Carro ${carro.modelo} adicionado com sucesso!`);
    }
    removerCarro(id) {
        this.carros = this.carros.filter(c => c.id !== id);
    }
    listarCarros() {
        return this.carros;
    }
}
exports.CarroService = CarroService;

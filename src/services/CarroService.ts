import { Carro } from "../models/Carro";

export class CarroService {
    private contadorId: number = 1;
    private carros: Carro[] = [];

    adicionarCarro(carro: Carro) {
        carro.id = this.contadorId;
        this.contadorId++;
        this.carros.push(carro);
        console.log(`Carro ${carro.modelo} adicionado com sucesso!`);
    }

    removerCarro(id: number){
        this.carros = this.carros.filter(c => c.id !== id);
    }

    listarCarros(): Carro[]{
        return this.carros;
    }
    
}
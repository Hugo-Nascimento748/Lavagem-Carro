import { Usuario } from "../models/Usuario";
import { Carro } from "../models/Carro";

export class UsuarioService {
    private contadorUsuarioId: number = 1;   // contador para IDs de usuários
    private contadorCarroId: number = 1;     // contador para IDs de carros
    private usuarios: Usuario[] = [];        // lista de usuários cadastrados

    // Adiciona um usuário já com pelo menos 1 carro
    adicionarUsuario(nome: string, modeloCarro: string) {
        const usuario = new Usuario();
        usuario.id = this.contadorUsuarioId++;
        usuario.nome = nome;

        // Cria o primeiro carro vinculado ao usuário
        const carro = new Carro();
        carro.id = this.contadorCarroId++;
        carro.modelo = modeloCarro;

        usuario.carros.push(carro);
        this.usuarios.push(usuario);

        console.log(`Usuário ${usuario.nome} com carro ${carro.modelo} adicionado com sucesso!`);
    }

    // Adiciona mais um carro a um usuário existente
    adicionarCarroParaUsuario(usuarioId: number, modeloCarro: string) {
        const usuario = this.usuarios.find(u => u.id === usuarioId);
        if (usuario) {
            const carro = new Carro();
            carro.id = this.contadorCarroId++;
            carro.modelo = modeloCarro;
            usuario.carros.push(carro);
            console.log(`Carro ${carro.modelo} adicionado para o usuário ${usuario.nome}`);
        } else {
            console.log("Usuário não encontrado.");
        }
    }

    // Remove usuário pelo id
    removerUsuario(id: number) {
        this.usuarios = this.usuarios.filter(u => u.id !== id);
        console.log(`Usuário com ID ${id} removido.`);
    }

    // Lista todos os usuários
    listarUsuarios(): Usuario[] {
        return this.usuarios;
    }

    // Lista todos os carros do sistema
    listarCarros(): Carro[] {
        return this.usuarios.flatMap(u => u.carros);
    }

    // Edita informações de um usuário
    editarUsuario(id: number, dadosAtualizados: Partial<Usuario>) {
        const usuario = this.usuarios.find(u => u.id === id);
        if (usuario) {
            Object.assign(usuario, dadosAtualizados);
            console.log(`Dados do usuário ${usuario.id} atualizados!`);
        } else {
            console.log("Usuário não encontrado.");
        }
    }
}

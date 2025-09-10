"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const Usuario_1 = require("../models/Usuario");
const Carro_1 = require("../models/Carro");
class UsuarioService {
    constructor() {
        this.contadorUsuarioId = 1; // contador para IDs de usuários
        this.contadorCarroId = 1; // contador para IDs de carros
        this.usuarios = []; // lista de usuários cadastrados
    }
    // Adiciona um usuário já com pelo menos 1 carro
    adicionarUsuario(nome, modeloCarro) {
        const usuario = new Usuario_1.Usuario();
        usuario.id = this.contadorUsuarioId++;
        usuario.nome = nome;
        // Cria o primeiro carro vinculado ao usuário
        const carro = new Carro_1.Carro();
        carro.id = this.contadorCarroId++;
        carro.modelo = modeloCarro;
        usuario.carros.push(carro);
        this.usuarios.push(usuario);
        console.log(`Usuário ${usuario.nome} com carro ${carro.modelo} adicionado com sucesso!`);
    }
    // Adiciona mais um carro a um usuário existente
    adicionarCarroParaUsuario(usuarioId, modeloCarro) {
        const usuario = this.usuarios.find(u => u.id === usuarioId);
        if (usuario) {
            const carro = new Carro_1.Carro();
            carro.id = this.contadorCarroId++;
            carro.modelo = modeloCarro;
            usuario.carros.push(carro);
            console.log(`Carro ${carro.modelo} adicionado para o usuário ${usuario.nome}`);
        }
        else {
            console.log("Usuário não encontrado.");
        }
    }
    // Remove usuário pelo id
    removerUsuario(id) {
        this.usuarios = this.usuarios.filter(u => u.id !== id);
        console.log(`Usuário com ID ${id} removido.`);
    }
    // Lista todos os usuários
    listarUsuarios() {
        return this.usuarios;
    }
    // Lista todos os carros do sistema
    listarCarros() {
        return this.usuarios.flatMap(u => u.carros);
    }
    // Edita informações de um usuário
    editarUsuario(id, dadosAtualizados) {
        const usuario = this.usuarios.find(u => u.id === id);
        if (usuario) {
            Object.assign(usuario, dadosAtualizados);
            console.log(`Dados do usuário ${usuario.id} atualizados!`);
        }
        else {
            console.log("Usuário não encontrado.");
        }
    }
}
exports.UsuarioService = UsuarioService;

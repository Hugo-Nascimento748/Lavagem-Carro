"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UsuarioService_1 = require("./services/UsuarioService");
const OrdemServicoService_1 = require("./services/OrdemServicoService");
const readline = require("readline-sync");
// Inicializa os serviços
const usuarioService = new UsuarioService_1.UsuarioService();
const ordemService = new OrdemServicoService_1.OrdemServicoService();
// Menu principal
while (true) {
    console.log("\n=== Sistema de Lavagem de Carros ===");
    console.log("1 - Adicionar Usuário com Carro");
    console.log("2 - Adicionar Carro para Usuário");
    console.log("3 - Listar Usuários");
    console.log("4 - Listar Carros");
    console.log("5 - Remover Usuário");
    console.log("6 - Criar Ordem de Serviço");
    console.log("7 - Listar Ordens de Serviço");
    console.log("0 - Sair");
    const opcao = readline.questionInt("Escolha: ");
    switch (opcao) {
        case 1:
            // Criação de usuário + 1 carro
            const nome = readline.question("Nome do usuário: ");
            const modelo = readline.question("Modelo do carro: ");
            usuarioService.adicionarUsuario(nome, modelo);
            break;
        case 2:
            // Adicionar outro carro para um usuário já existente
            const usuarioId = readline.questionInt("ID do usuário: ");
            const modeloCarro = readline.question("Modelo do novo carro: ");
            usuarioService.adicionarCarroParaUsuario(usuarioId, modeloCarro);
            break;
        case 3:
            // Listar todos os usuários com seus carros
            console.log("\nUsuários cadastrados:");
            usuarioService.listarUsuarios().forEach(u => {
                console.log(`ID: ${u.id} | Nome: ${u.nome} | Carros: ${u.carros.map(c => c.modelo).join(", ")}`);
            });
            break;
        case 4:
            // Listar todos os carros do sistema
            console.log("\nCarros cadastrados:");
            usuarioService.listarCarros().forEach(c => {
                console.log(`ID: ${c.id} | Modelo: ${c.modelo}`);
            });
            break;
        case 5:
            // Remover um usuário
            const idRemover = readline.questionInt("ID do usuário para remover: ");
            usuarioService.removerUsuario(idRemover);
            break;
        case 6:
            // Criar uma nova ordem de serviço
            const userId = readline.questionInt("ID do usuário: ");
            const usuario = usuarioService.listarUsuarios().find(u => u.id === userId);
            if (!usuario) {
                console.log("Usuário não encontrado.");
                break;
            }
            if (usuario.carros.length === 0) {
                console.log("Esse usuário não possui carros cadastrados.");
                break;
            }
            console.log("Carros do usuário:");
            usuario.carros.forEach(c => console.log(`ID: ${c.id} | Modelo: ${c.modelo}`));
            const carroId = readline.questionInt("ID do carro para a lavagem: ");
            const carro = usuario.carros.find(c => c.id === carroId);
            if (!carro) {
                console.log("Carro não encontrado.");
                break;
            }
            ordemService.criarOrdem(carro);
            break;
        case 7:
            // Listar todas as ordens de serviço
            console.log("\nOrdens de Serviço:");
            ordemService.listarOrdens().forEach(o => {
                console.log(`OS ID: ${o.id} | Carro: ${o.carro.modelo} | Preço: R$${o.preco}`);
            });
            break;
        case 0:
            // Sair do sistema
            console.log("Saindo...");
            process.exit();
    }
}

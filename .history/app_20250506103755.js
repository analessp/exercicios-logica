const readline = require("readline-sync");

const diaDaSemana=() => {
    // Solicita o número ao usuário
const numero = parseInt(readline.question("Digite um numero de 1 a 7:"));

let dia;

switch (numero) {
    case 1:
        dia = "Segunda-feira";
        break;
        case 2:
            dia = "Terca-feira";
            break;
            case 3:
                dia = "Quarta-feira";
            break;
            case 4:
                dia = "Quinta-feira";
                break;
                case 5:
                    dia = "Sexta-feira";
                    break;
                    case 6:
                        dia = "Sabado"
                        break;
                        case 7:
                        dia = "Domingo";
                        break;
                        default:
                            dia = "Numero invalido! Digite um numero entre 1 e 7.";
}

// Para exibir o resultado
console.log(dia);
}

const readline = require("readline-sync");

const menuDeCadastro=() => {
    // Simulação de um banco de dados em memória
    let banco = [];

    function mostrarMenu() {
        console.log("\n===== MENU DE CADASTRO =====");
        console.log("C) Create - Cadastrar");
        console.log("R) Read   - Listar");
        console.log("U) Udpate - Atualizar");
        console.log("D) Delete - Excluir");
        console.log("S) Sair");
    }

    let opcao;
    do {
        mostrarMenu ();
        opcao = readline.question("Escolha uma opção (C, R, U, D, S): ").toUpperCase();

        switch (opcao) {
            case "C":
                const novoItem = readline.question("Digite o nome para cadastrar: ");
                banco.push(novoItem);
                console.log("Cadastro realizado com sucesso!");
                break;

                case "R":
                    console.log("\n--- Lista de Cadastros ---");
                    if (banco.length === 0) {
                        console.log("Nenhum cadastro encontrado.");
                    } else {
                        banco.forEach((item, index) => {
                            console.log(`${index + 1}. ${item}`);
                        });
                    }
                    break;

                    case "U":
                        const indiceAtualizar = parseInt(readline.question("Digite o numero do item para atualizar:")) -1;
                        if (indiceAtualizar >= 0 && indiceAtualizar < banco.length) {
                            const novoNome = readline.question("Digite o novo nome: ");
                            banco[indiceAtualizar] = novoNome;
                            console.log("Cadastro atualizado com sucesso!");
                        } else {
                            console.log("Indice invalido.");
                        }
                        break;

                        case "D":
                            const indiceDeletar = parseInt(readline.question(""))
        }
    }
}



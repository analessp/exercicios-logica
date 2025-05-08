const readline = require("readline-sync");

// 1. Escreva um programa que solicite ao usuário um número de 1 a 7 e informe o dia correspondente da semana (por exemplo, 1 para segunda-feira, 2 para terça-feira, etc.).

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
console.log(`qual e o dia da semana ${dia}`);
}

// 2. Escreva um algoritmo que construa um menu de cadastro com as opções:
// C) Create	(Cadastrar/Inserir)
// R) Read	    (Buscar/Ler)
// U) Update	(Editar/Atualizar)
// D) Delete	(Excluir/Apagar)

const menuDeCadastro=() => {
    // Simulação de um banco de dados em memória
    let banco = [];

    function mostrarMenu() {
        console.log("\n===== MENU DE CADASTRO =====");
        console.log("C) Create - Cadastrar");
        console.log("R) Read   - Listar");
        console.log("U) Update - Atualizar");
        console.log("D) Delete - Excluir");
        console.log("S) Sair");
    }

    let opcao;
    do {
        mostrarMenu();
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
                            const indiceDeletar = parseInt(readline.question("Digite o numero do item para excluir: ")) -1;
                            if (indiceDeletar >= 0 && indiceDeletar < banco.length) {
                                banco.splice(indiceDeletar, 1);
                                console.log("Cadastro excluido com sucesso!");
                            } else {
                                console.log("Indice invalido!");
                            }
                            break;

                            case "S":
                                console.log("Saindo do menu de cadastro...");
                                break;

                                default:
                                    console.log("Opcao invalida! Tente novamente.");
        }

    } while (opcao !== "S");
};

// Chamada da função
menuDeCadastro();

// 3. Crie uma função vendaHotDogs que recebe n (quantidade de hotdogs). Dependendo da quantidade, o preço unitário varia:
// Quantidade de hotdogs                Preço por unidade (centavos)
// Preço por unidade (centavos)
// n < 5
100
5 ≤ n < 10
95
n ≥ 10
90



const vendaHotDogs=() => {

    // Função para calcular e formatar o valor
    function calcularPreco(n) {
        let precoUnitario;

        if (n < 5) {
            precoUnitario = 500; // R$ 5,00
        } else if (n < 10) {
            precoUnitario = 450; // R% 4,50
        } else {
            precoUnitario = 400; // R$ 4,00
        }

        const totalCentavos = precoUnitario *n;
        const totalReais = totalCentavos / 100;

        return totalReais.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }

    // Programa interativo
    function iniciarVenda() {
        console.log("=== Venda de Hot Dogs ===");

        const quantidade = parseInt(readline.question("Quantos hot dogs voce deseja?"));

        if (isNaN(quantidade) || quantidade <=0) {
            console.log("Quantidade invalida. Digite um numero maior que zero.");
            return;
        }

        const total = calcularPreco(quantidade);

        console.log(`Valor total a pagar por ${quantidade} hot dog(s): ${total}`);
    }

    iniciarVenda();
};

vendaHotDogs(); // Chamada da função principal


const removerVogais=() => {

    // Função que remove vogais de uma string
    function removerVogais(texto) {
        return texto.replace(/[aeiouAEIOU]/g, "");
    }

    //Função interativa
    function iniciarRemocaoDeVogais() {
        console.log("=== REMOÇÃO DE VOGAIS ===");

        const entrada = readline.question("Digite uma frase: ");

        const resultado = removerVogais(entrada);

        console.log("\nFrase sem vogais:");
        console.log(resultado);
    }

    // Chamada de função principal
    iniciarRemocaoDeVogais();
};

// Chamada de função externa
removerVogais();

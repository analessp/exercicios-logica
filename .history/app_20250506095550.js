const readline = require("readline-sync");

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

con

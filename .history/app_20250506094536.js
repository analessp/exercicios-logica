const readline = require("readline-sync");

const rl= readline.createInterface({
    inpunt: process.stdin,
    output: process.stdout
});

rl.question("Digite um numero de 1 a 7:" ", function(numero)") {
    const num = parseInt(numero);
    let dia;
}

switch (num) {
    case 1:
        dia="Segunda-feira";
        break;
        case 2:
            dia="Terca-feira";
            break;
            case 3:
                dia="Quarta-feira";
            break;
            case 4:
                dia="Quinta-feira";
                break;
                case 5:
                    dia="Sexta-feira";
                    break;
                    case 6:
                        dia="Sabado"
                        break;
                        case 7:
                            "Domingo";
                        break
}
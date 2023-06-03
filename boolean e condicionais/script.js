// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 24;
var idadeImaginaria = 32;


if (minhaIdade > idadeImaginaria) {
    console.log("sou mais velha");
     }else if (minhaIdade === idadeImaginaria){
        console.log("teste");
    } else {
        console.log("sou mais nova");
    }

var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)

// Verifique se as seguintes variáveis são True ou False
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)//pra descobrir se é true ou false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log("Brasil é maior");
     }else if (brasil === china){
        console.log("Eles tem o mesmo tamanho");
    } else {
        console.log("China é maior");
    }


// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {//se Gato é igual a gato = verdadeiro, senao, é falso
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
/*
    Usando o operador Rest, muito similar com Spread, porém o efeito é o mesmo, exemplo:
*/
/*
function number(...numeros) {
    return numeros;
}
console.log(number(1, 2, 3));
*/

function addItem(nomes, ...novosNomes) {
    let concat = [
        ...nomes,
        ...novosNomes
    ];
    return concat;
}

let nomes = ['Beltrano', 'Cicrano'];

let outros = addItem(nomes, 'Nome novo', 'Outro nome novo', 'Mais um nome novo');

console.log(outros);
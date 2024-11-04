/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/

let listaCompras = [];

listaCompras [0] = prompt("")
listaCompras [1] = prompt("")
listaCompras [2] = prompt("")

if (listaCompras[2] == "leite"){
    console.log(`Sua lista de compras é ${listaCompras}`)
}

else {
    listaCompras.push("leite")

    console.log(`Sua lista de compras é ${listaCompras}`)
}
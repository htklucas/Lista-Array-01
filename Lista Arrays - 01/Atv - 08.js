// Ana está organizando suas tarefas de limpeza semanal. Crie um array inicialmente vazio chamado tarefasLimpeza. 
// Solicite a Ana para adicionar quatro tarefas à lista. Remova a terceira tarefa da lista e, em seguida,
// mude a segunda tarefa para "limpar banheiro". Imprima a lista de tarefas de limpeza atualizada no final.

let tarefas = []

alert("Bom dia Ana! Coloque quatro tarefas para a sua lista!")

tarefas[0] = prompt("Digite a primeira tarefa!")
tarefas[1] = prompt("Digite a segunda tarefa!")
tarefas[2] = prompt("Digite a terceira tarefa!")
tarefas[3] = prompt("E a quarta tarefa!")

tarefas.splice(2, 1)

tarefas.splice(1, 1, "limpar banheiro")

alert(`Sua lista utilizada: ${tarefas}`)
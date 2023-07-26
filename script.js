let num = window.document.getElementById('fnum')
let lista = window.document.getElementById('flista')
let res = window.document.getElementById('res')
let valores = []

function isNumero(num){
    if(Number(num)>=1 && Number(num)<=100){
        return true
    }else{
        return false
    }
}

function inLista(num, list){
    if(list.indexOf(Number(num)) != -1){//-1 indica que o valor não fopi encontrado na lista
        return true
    }else{
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){//teste se é número e se não está na lista
        //window.alert('Tudo OK!')
        valores.push(Number(num.value))
        let item = window.document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item)
        res.innerHTML = '' //limpar o res ao adicionar um número
    }else{
        window.alert('Valor inválido ou já existente na lista!')
    }
    num.value = '' //deixar a caixa limpa assim que adicionar um número
    num.focus() //cursor já fica piscando dentro da caixa
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let total = valores.length //quantos valores existem no vetor
        let maior = valores[0] // o maior e o menor número é o primeiro ao ser adicionado 
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos] //somando os valores
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
            
        }
        media = soma/total

        res.innerHTML = ''//limpar o res
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor é: ${maior}</p>`
        res.innerHTML += `<p>O menor valor é: ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é: ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é: ${media}</p>`
    }
}

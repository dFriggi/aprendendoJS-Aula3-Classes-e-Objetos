/* exercício resolvido utilizando classes, métodos, e uma função extra para comparar qual dos carros
é o mais econômico*/
const custoPorLitro = 5
const distancia = 350

class carro{
    constructor(marca, cor , gastoMedio){
        this.marca = marca
        this.cor = cor
        this.gastoMedio = gastoMedio
    }
    preco(){
        let precoTotal = (distancia/this.gastoMedio * custoPorLitro)

        console.log(`O carro ${this.cor} da ${this.marca} gasta ${precoTotal} para fazer a viagem`)
    }
}

function compararPrecos(carro1 , carro2){
    if(carro1.gastoMedio < carro2.gastoMedio){
        console.log(`${carro2.marca} é mais econômica que a ${carro1.marca}`)
    } else if(carro1.gastoMedio > carro2.gastoMedio){
        console.log(`${carro1.marca} é mais econômica que a ${carro2.marca}`)
    } else {
        console.log(`${carro1.marca} e ${carro2.marca} são igualmente econômicas`)
    }
}

let carroUm = new carro("Fiat" , "azul" , 10)
let carroDois = new carro("Tesla" , "branco" , 20)

carroUm.preco()
carroDois.preco()
compararPrecos(carroUm , carroDois)
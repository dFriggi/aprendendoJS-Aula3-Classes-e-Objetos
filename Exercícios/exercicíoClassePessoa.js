// exercico resolvio usando classes, 2 métodos diferentes e switch cases
class pessoa{
    constructor(nome , peso , altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }
    calculoIMC(){
        return this.peso/(this.altura*this.altura)
    }
    classifacaoIMC(){
        switch(true){
            case this.calculoIMC() < 18.5:
                return "estou abaixo do peso"
  
            case this.calculoIMC() >= 18.5 && this.calculoIMC() < 25:
                return "estou com o peso normal"

            case this.calculoIMC() >= 25 && this.calculoIMC() < 30:
                return "estou acima do peso"

            case this.calculoIMC() >= 30 && this.calculoIMC() < 40:
                return "estou obeso"

            case this.calculoIMC() >= 40:
                return "estou com obesidade grave"    
        }
    }
}
let jose = new pessoa("José" , 70 , 1.75)
console.log(`Meu nome é ${jose.nome} e meu IMC é ${jose.calculoIMC()}, portanto ${jose.classifacaoIMC()}`)

let davi = new pessoa("Davi" , 80 , 1.73)
console.log(`Meu nome é ${davi.nome} e meu IMC é ${davi.calculoIMC()}, portanto ${davi.classifacaoIMC()}`)

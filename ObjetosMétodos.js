//criando objetos
let davi = {
    name: "Davi",
    idade: 18,
    gosto: "programar",

    apresentacao: function(){
        console.log(`Meu nome é ${this.name}, tenho ${this.idade} e gosto de ${this.gosto}`)
    }
}

davi.apresentacao()
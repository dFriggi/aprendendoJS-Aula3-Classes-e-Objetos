//criando objetos com operadores condicionais
let davi = {
    name: "Davi",
    idade: 18,
    gosto: "programar"
}

davi.altura = 1.74

delete davi.gosto

if(davi.gosto === undefined){
    console.log(`Meu nome é ${davi.name}, tenho ${davi.idade} e tenho ${davi.altura} de altura`)
} else {
    console.log(`Meu nome é ${davi.name}, tenho ${davi.idade} e gosto de ${davi.gosto}`)
}
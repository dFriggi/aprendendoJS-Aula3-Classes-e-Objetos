//aplicando métodos nas classes
class player{ 
    constructor(nickname, level , rank){
        this.nickname = nickname
        this.level = level
        this.rank = rank
    }
    apresentacao(){
        console.log(`Meu nickname é ${this.nickname}, estou no level ${this.level} e sou ${this.rank}`)
    }
}

let friggin = new player("FRIGGIN" , 165 , "Platina")
let teemo = new player("MonoTeemo" , 15 , "Diamante")

friggin.apresentacao()
teemo.apresentacao()
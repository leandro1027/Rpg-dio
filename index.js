class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        if (this.tipo === 'mago') {
            ataque = "magia";
            console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
        } else if (this.tipo === 'guerreiro') {
            ataque = "espada";
            console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
        } else if (this.tipo === 'monge') {
            ataque = "artes marciais";
            console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
        } else if (this.tipo === 'ninja') {  
            ataque = "shuriken";
            console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
        } else {
            console.log(`O ${this.tipo} ${this.nome} não tem um ataque definido.`);
        }
    }
}

const heroi1 = new Heroi('Leandro', '20', 'mago');
const heroi2 = new Heroi('Sei lá', '99', 'guerreiro');
const heroi3 = new Heroi('Tanto faz', '100', 'monge');
const heroi4 = new Heroi('Ninjão', '33', 'ninja');

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();

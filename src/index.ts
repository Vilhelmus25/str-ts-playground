import './style.scss';

class User {
    name: string = '';            // a string az typescript, megadjuk a typusát         // ide sem írhatok számot, mert stringet vár lent
    emai: string = '';
    age: number = 18;

    constructor(name: string /* = 'Jenő' */) {
        this.name = name;
    }

    //  hello(): number {               // ez hibás neki, mert a stringet nem lehet a számhoz rendeltetni, mert számot vár.
    hello(): string {               // itt megtudjuk jelölni a típust, ezért nevezzük typescriptnek
        return `Szia a nevem ${this.name}.`;
    };
}

const user1 = new User('Juli');
const user2 = new User('Laci');
//user2.name = 'jenő';
const user3 = new User('Pistike');

console.log(user3.hello());
console.log(user3.age, user3.name);

// const user = {
//     name: 'Juli',
//     email: 'juli@legjobbangoltanar.hu',
//     hello() {
//         return `Hello, I am ${this.name}.`
//     },
// };

// const user2 = {
//     name: 'Péter',
//     email: 'peter@gmail.hu',
//     hello() {
//         return `Hello, I am ${this.name}.`      // redundáns a kód, ha 100 user van akkor 100-szor van hello metódus
//     },
// };

//console.log(user.name);

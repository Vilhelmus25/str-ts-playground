import './style.scss';

class Vehicle {
    name: string;       // így van üresen hagyva
    /** @var {string} type -can be water, ground, air  */           // így kommentelek szebben
    type: string;                                                   // lehet vizi, légi és szárazföldi

    /* constructor(name: string) {              // jó ez üres konstruktorral is amit a ts legenerál
        this.name = name;
    } */

    move(from: number, to: number): string {                            // ilyenkor string típusú lesz a metódus ezért a returnjébe egy string kell; Van void is, akkor nincs visszatérési érték
        return `This vehicle is moving from ${from} to ${to}.`;
    };
};

class GroundVehicle extends Vehicle {           // az extends kulcsszóval örökli a GroundVehicle a Vehicle tulajdonságait
    type: string = 'ground';
    wheels: number = 0;

    constructor(name: string, wheels: number) {
        super();                                // az ős konstruktorát hívja meg a super() 
        this.name = name;                       // ha az ősben van konstruktor, akkor ez ide nem kell!!!
        this.wheels = wheels;
    }
}

class Lorry extends GroundVehicle {
    capacity: number = 0;
    constructor(name: string, wheels: number, capacity: number) {
        super(name, wheels);
        this.capacity = capacity;
    }
}

const volvoTruck = new Lorry('GlobeTrotter', 12, 24000);

console.log(volvoTruck.move(10, 50));


// class User {
//     name: string = '';            // a string az typescript, megadjuk a typusát         // ide sem írhatok számot, mert stringet vár lent
//     emai: string = '';
//     age: number = 18;

//     constructor(name: string /* = 'Jenő' */) {
//         this.name = name;
//     }

//     //  hello(): number {               // ez hibás neki, mert a stringet nem lehet a számhoz rendeltetni, mert számot vár.
//     hello(): string {               // itt megtudjuk jelölni a típust, ezért nevezzük typescriptnek
//         return `Szia a nevem ${this.name}.`;
//     };
// }

// const user1 = new User('Juli');
// const user2 = new User('Laci');
// //user2.name = 'jenő';
// const user3 = new User('Pistike');

// console.log(user3.hello());
// console.log(user3.age, user3.name);




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

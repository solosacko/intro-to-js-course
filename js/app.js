console.log('connected');


const myFirstCar = {
    make: "Toyota",
    model: "Corolla",
    color: "black",
    isRunning: false,
    start: function () {
     myFirstCar.isRunning = true;
     console.log('Running!!! vroom vroom');
    },
};

// Defining a class
class Car {
static cars = []; 

constructor(make, model, color) {
// this keyword is refering to the instance (object) that is being constructed
this.make = make;
this.model = model;
this.color = color;
this.isRunning = false; // default to false

Car.cars.push(this);
}

start() {
this.isRunning = true;
console.log('The ${this.make ${this.model} is running! Vroom Vroom');
}

stop() {
    this.isRunning = false;
    console.log('Stopped');
}

static about() {
    console.log(`I'm the car class!`);
}

// override a prototype method
toString() {
    return `This Car is a ${this.color} ${this.make} ${this.model}.`;
}
 }


 Car.about();

 // Electric car subclass
 class ElectricCar extends Car {
    constructor(make, model, color, batteryCharge) {
        super(make, model, color);
        this.batteryCharge = batteryCharge;
    }

    start() {
        if (this.batteryCharge > 0) {
            this.isRunning = true;
            console.log('your electric car is running');
        } else {
            this.isRunning = false;
            console.log('Time to recharge');
        }
    }
 }

 // Instances of Car
 // Everytime you instantiate your Car class the constructor method is being ran
 const myCar = new Car('Ford', 'Bronco', 'orange');
 myCar.tinyLadder = true;
 
 const secondCar = new Car('BMW', 'i4', 'white');

 const mySubaru = new Car('subaru', 'Crosstrek', 'blue');

 myCar.start();

 console.log('First Car: ', myCar);

 secondCar.start();
 secondCar.stop();

 console.log('second Car: ', secondCar);

 console.log(mySubaru.toString());

 console.log('Subaru: ', mySubaru);

 console.log('All of the Car instances created: ', Car.cars);

 // console.log(myCar instanceof Car);

 // Instances of ElectricCar
 const myVolvo = new ElectricCar('Volvo', 'EX30', 'Gray', 100); // Fully charged!

 // myVolvo.batteryCharge = 0;
 myVolvo.start();

 ////////////////////////

 class Airplane {
    constructor(airline, pilot, maxSpeed) {
        this.airline = airline;
        this.pilot = pilot;
        this.maxSpeed = maxSpeed;
        this.wings = 2;
    }
    takeoff(from) {
        console.log(`Taking off from ${from}. Whoosh!`);
    }
    land(at) {
        console.log(`Landing in ${at}`);
    }
 } 
 const commericalPlane = new Airplane('United', 'Andrew S.', '450mph');

 // console.log(commercialPlane);
 
 // commericalPlane.takeoff('HTX);

 // commericalPlane.land('EWR');

 // BONUS

 const charArr = [
    {
        make: 'Honda',
        model: 'Civic',
        color: 'blue',
    },
    {
        make: 'Hyundai',
        model: 'Elantra',
        color: 'black',
    },
    {
        make: 'Porche',
        model: '911',
        color: 'black',
    },
    {
        make: 'Jeep',
        model: 'Wrangler',
        color: 'red',
    },
    {
        make: 'Tesla',
        model: 'Model X',
        color: 'white',
    },
 ];

 const cars = [];

 charArr.forEach((charObj) => {
    const newCar = new Car(charObj.make, charObj.model, charObj.color);
    cars.push(newCar);
 });

 console.log('Generated Cars: ', cars);










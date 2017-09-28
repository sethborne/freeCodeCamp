// add parameters

var Car = function(wheels, seats, engines){
    this.wheels = wheels;
    this.seats = seats;
    this.engines = engines;
}

var myCar = new Car(4, 4, 2);

console.log(myCar);
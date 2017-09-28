var Car = function(){
    var speed = 10;
    
    this.accelarate = function(change){
        speed += change;
    };
    this.decelerate = function(){
        speed -= 5;
    };
    this.getSpeed = function(){
        return speed;
    };
};

var Bike = function(){
    var gear;
    
    this.getGear = function(){
        return gear;
    };
    this.setGear = function(numValGear){
        gear = numValGear;
    };
};

var myCar = new Car();

var myBike = new Bike();

myBike.setGear(4);
console.log(myBike.getGear());
myBike.setGear(3);
console.log(myBike.getGear());
myBike.setGear(1);
console.log(myBike.getGear());


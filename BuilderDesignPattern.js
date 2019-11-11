/**
 * Description:
 *              two builder objects: CarBuilder and TruckBuilder. 
 *              The Shop's construct method accepts a Builder instance 
 *              which it then takes through a series of assembly steps: step1 and step2. 
 *              The Builder's get method returns the newly assembled products 
 *              (Car objects and Truck objects).
 * 
 * @author: Vaishnavi Bhosale
 */

// Shop() constructs products by using the Builder's multistep interface
function Shop() {
    this.construct = function(builder) {
        builder.step1();
        builder.step2();
        return builder.get();
    }
}
 
/*
  CarBuilder()--->
 -implements the multistep Builder interface
 -maintains the product through the assembly process
 -offers the ability to retrieve the newly created product
 */

function CarBuilder() {
    this.car = null;
 
    this.step1 = function() {
        this.car = new Car();
    };
 
    this.step2 = function() {
        this.car.addParts();
    };
 
    this.get = function() {
        return this.car;
    };
}

/*
  TruckBuilder()--->
 -implements the multistep Builder interface
 -maintains the product through the assembly process
 -offers the ability to retrieve the newly created product
 */

function TruckBuilder() {
    this.truck = null;
 
    this.step1 = function() {
        this.truck = new Truck();
    };
 
    this.step2 = function() {
        this.truck.addParts();
    };
 
    this.get = function() {
        return this.truck;
    };
}
 
//Car() Object being assemled
function Car() {
    this.doors = 0;
 
    this.addParts = function() {
        this.doors = 4;
    };
 
    this.say = function() {
        log.add("I am a " + this.doors + "-door car");
    };
}
 
//Truck() Object being assemled
function Truck() {
    this.doors = 0;
 
    this.addParts = function() {
        this.doors = 2;
    };
 
    this.say = function() {
        log.add("I am a " + this.doors + "-door truck");
    };
}
 
// log helper
var log = (function () {
    var log = "";
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { console.log(log); log = ""; }
    }
})();
 
function run() {
    var shop = new Shop();
    var carBuilder = new CarBuilder();
    var truckBuilder = new TruckBuilder();
    var car = shop.construct(carBuilder);
    var truck = shop.construct(truckBuilder);
 
    car.say();
    truck.say();
 
    log.show();

}
run()

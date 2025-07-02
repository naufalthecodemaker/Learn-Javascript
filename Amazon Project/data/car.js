// exercise 17abcdefg

class Car {
  // add properties
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  // add methods
  constructor(carDetails){
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo(){
    const trunkStatus = this.isTrunkOpen ? 'open' : 'closed'
    
    console.log(
      `${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, Trunk: ${trunkStatus}`
    );
  }

  go(){
    if(!this.isTrunkOpen){
      this.speed += 5;
    }

    if (this.speed > 200) {
      this.speed = 200;
    }
  }

  brake(){
    this.speed -= 5;

    if (this.speed < 0) {
      this.speed = 0;
    }
  }

  openTrunk(){
    if(this.speed === 0){
      this.isTrunkOpen = true;
    }
  }

  closeTrunk(){
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car{
  acceleration;

  constructor(carDetails){
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go(){
    this.speed += this.acceleration;

    if (this.speed > 300) {
      this.speed = 300;
    }
  }

  openTrunk(){
    console.log('Race cars do not have a trunk.');
  }

  closeTrunk(){
    console.log('Race cars do not have a trunk.');
  }
}

const object1 = new Car({brand: 'Toyota', model: 'Corolla'});
const object2 = new Car({brand: 'Tesla', model: 'Model 3'});

const raceCar = new RaceCar({brand: 'McLaren', model: 'F1', acceleration: 20});

console.log(object1);
console.log(object2);

object1.displayInfo();
object1.go();
object1.go();
object1.go();
object1.brake();
object1.displayInfo();

object1.openTrunk();
object1.displayInfo();

object2.displayInfo();
object2.go();
object2.brake();
object2.brake();
object2.displayInfo();

object2.openTrunk();
object2.go();
object2.displayInfo();

raceCar.go();
raceCar.go();
raceCar.go();
raceCar.displayInfo();
raceCar.openTrunk();
raceCar.displayInfo();
raceCar.brake();
raceCar.displayInfo();
class Vehicle {
  // take first argument that comes in and assign as an instance variable of color
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

// Inheritance
class Car extends Vehicle {
  // when calling a constructor in a child class, the constructor of the parent must be
  // called as well
  constructor(public wheels: number, color: string) {
    // reference to the constructor method in the parent
    super(color);
  }

  // override drive method;
  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

// since it extends vehicle, must pass in a string color
const car = new Car(4, "red");

car.startDrivingProcess();

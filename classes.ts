class Vehicle {
  public honk(): void {
    console.log("beep");
  }
}

// Inheritance
class Car extends Vehicle {
  // override drive method;
  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car();

car.startDrivingProcess();
car.honk();

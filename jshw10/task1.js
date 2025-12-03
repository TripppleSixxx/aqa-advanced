class Car {
  constructor(model) {
    this.classModel = model;
  }

  set model(value) {
    if (typeof value === 'string') {
      this.classModel = value;
    } else {
      console.log("Error")
    }
  }
}

const car = new Car();
console.log(car.classModel);

car.model = 'BMW';
console.log(car.classModel);
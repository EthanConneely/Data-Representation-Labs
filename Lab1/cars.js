// Vehicle class
class Vehicle
{
    make;
    model;
    year;

    constructor(make, model, year)
    {
        // Assign the varaible passed into the contructor to the member variables
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information()
    {
        // Log out the member varaible to the console
        console.log(`Make: ${this.make}\nModel: ${this.model}\nYear: ${this.year}`);
    }
}

// Create the vehicle class
let vehicle = new Vehicle("BMW", "No clue", 3056);

// Log the information to the console
vehicle.Information();

class Car extends Vehicle
{
    doors;
    constructor(make, model, year, doors)
    {
        // Call the super class contructor
        super(make, model, year);
        // assign the number of doors passed to this cars class
        this.doors = doors;
    }

    Information()
    {
        // Call the parent classes version of information
        super.Information();

        // Log the number of doors to the screen
        console.log(`Doors: ${this.doors}\n`);
    }
}

// Create class car that inherits from the parent vehicle class
let car = new Car("Honda", "Civic", 2365, 23)

// call the information method that calls the super method in Vehicle
car.Information()

// BMI class
class BMI
{
    height;
    weight;

    constructor(height, weight)
    {
        // Set instance variables to values passed in
        this.height = height;
        this.weight = weight;
    }

    calculateBMI()
    {
        // Formula to calculate BMI
        return this.weight / (this.height ** 2);
    }
}

// Create object
let bmiCalc = new BMI(175, 54);

// Log out the result
console.log(bmiCalc.calculateBMI());

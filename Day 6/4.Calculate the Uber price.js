
//4.write a class to calculate the Uber price.

class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
    }

    calculatePrice(distance, time) {
        const fareFromDistance = distance * this.costPerMile;
        const fareFromTime = time * this.costPerMinute;
        const totalFare = this.baseFare + fareFromDistance + fareFromTime;
        return totalFare;
    }
}

// Example usage:
const myUberRide = new UberPriceCalculator(5, 0.5, 1.2); // Base fare: $5, Cost per minute: $0.5, Cost per mile: $1.2
const distanceTraveled = 10; // in miles
const timeTaken = 20; // in minutes

const totalPrice = myUberRide.calculatePrice(distanceTraveled, timeTaken);
console.log(`The total price for the ride is $${totalPrice.toFixed(2)}`);


//Otput:

The total price for the ride is 
$27.00


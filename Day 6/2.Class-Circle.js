//2.Class- Circle
//Convert the UML diagram to Typescript class. - use number for double

class Circle {
    private radius: number;
    private color: string;

    constructor(radius: number = 1.0, color: string = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    getColor(): string {
        return this.color;
    }

    setColor(color: string): void {
        this.color = color;
    }

    toString(): string {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}

// Example usage:
const myCircle = new Circle(); // Creates a Circle with default values
console.log(myCircle.toString()); // Display circle details
console.log("Area:", myCircle.getArea()); // Calculate and display area
console.log("Circumference:", myCircle.getCircumference()); // Calculate and display circumference

// Modifying circle properties
myCircle.setRadius(2.5);
myCircle.setColor("blue");
console.log(myCircle.toString()); // Display updated circle details

//Output:

Circle[radius=1, color=red]
Area: 3.141592653589793
Circumference: 6.283185307179586
Circle[radius=2.5, color=blue]


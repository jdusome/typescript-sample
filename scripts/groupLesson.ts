/* Part 1 - Variables, How do we work with variables in TypeScript? */

/*
var myString: string;
myString = "Cheese";

document.write("myString is " + myString + "<br />");

//We can initialize a variable in declaration statement as follows
var myArray: Array<number> = [1,2,3];

document.write("myArray is " + myArray + "<br />");

//enumerated type
enum Genre {Rock, Funk, Country};

document.write(Genre[1] + " is represented by the numeric value " + Genre.Funk + "<br />");

//If we do not know the data type yet, we can use the type any
var unknownType: any;
unknownType = true;

document.write("Unknown Type is now type " + typeof(unknownType) + "<br />");
*/

/* Part 2 - Objects */

//creating a new class called Candy
class Candy {

    private _colour: string = "";
    //static variables are shared between all instances of the class
    static numberOfCandy: number = 0;

    //initializes our new object when first constructed
    //will automatically create the variables if declared private
    constructor(private name: string, private _price: number){
        Candy.numberOfCandy++;
    }

    //GET Method
    get price(): number{
        return this._price;
    }

    //SET Method
    set colour (colour: string){
        this._colour = colour;
    }

    //static methods are class methods
    static candyCount(): number{
        return Candy.numberOfCandy;
    }

    displayCandy() {
        //display our current Candy
        document.write(this._colour + " " + this.name + "<br />Price: $" + (this.price).toFixed(2) + "<br /><br />");
    }
}

//document.write("Welcome to the Candy Shop! <br /><br />");

var lollipop1 = new Candy("Lollipop",2.99);
var lollipop2 = new Candy("Lollipop",3.99);
lollipop2.colour = "Orange";

/*
lollipop1.displayCandy();
lollipop2.displayCandy();
document.write("Wow, the Orange lollipop is " + lollipop2.price + "$");
*/

/* PART 3 - Inheritance and Arrays + Functions */

//The chocolate class inherits all methods, and variables of the Candy Class
class Chocolate extends Candy{
    constructor(name: string, _price: number){
        //super references the parent classes constructor
        super(name, _price);
        Chocolate.numberOfCandy++;
    }
}

var Reeses = new Chocolate("Reese's Peanut Butter Cups",2.00)

//Reeses.displayCandy();

var candyList: Array<Candy> = [];
var candyArgs = [lollipop1,lollipop2,Reeses];

//The spread operator will split an array into the arguments of a function
candyList.push(...candyArgs);

//In our brackets, we declare what will be passed in and type. afterwards we declare what it will return.
var candyShop = function(): void {

    document.write("Welcome to the Candy Shop! <br /><br />");

    //display each candy in our candyList
    for(var val in candyList){
        candyList[val].displayCandy();
    }

    document.write("Candy on display: " + Candy.candyCount())
}

candyShop();
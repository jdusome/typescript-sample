/* Part 1 - Variables, How do we work with variables in TypeScript? */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Candy = (function () {
    //initializes our new object when first constructed
    //will automatically create the variables if declared private
    function Candy(name, _price) {
        this.name = name;
        this._price = _price;
        this._colour = "";
        Candy.numberOfCandy++;
    }
    Object.defineProperty(Candy.prototype, "price", {
        //GET Method
        get: function () {
            return this._price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Candy.prototype, "colour", {
        //SET Method
        set: function (colour) {
            this._colour = colour;
        },
        enumerable: true,
        configurable: true
    });
    //static methods are class methods
    Candy.candyCount = function () {
        return Candy.numberOfCandy;
    };
    Candy.prototype.displayCandy = function () {
        //display our current Candy
        document.write(this._colour + " " + this.name + "<br />Price: $" + (this.price).toFixed(2) + "<br /><br />");
    };
    //static variables are shared between all instances of the class
    Candy.numberOfCandy = 0;
    return Candy;
}());
//document.write("Welcome to the Candy Shop! <br /><br />");
var lollipop1 = new Candy("Lollipop", 2.99);
var lollipop2 = new Candy("Lollipop", 3.99);
lollipop2.colour = "Orange";
/*
lollipop1.displayCandy();
lollipop2.displayCandy();
document.write("Wow, the Orange lollipop is " + lollipop2.price + "$");
*/
/* PART 3 - Inheritance and Arrays + Functions */
//The chocolate class inherits all methods, and variables of the Candy Class
var Chocolate = (function (_super) {
    __extends(Chocolate, _super);
    function Chocolate(name, _price) {
        //super references the parent classes constructor
        _super.call(this, name, _price);
        Chocolate.numberOfCandy++;
    }
    return Chocolate;
}(Candy));
var Reeses = new Chocolate("Reese's Peanut Butter Cups", 2.00);
//Reeses.displayCandy();
var candyList = [];
var candyArgs = [lollipop1, lollipop2, Reeses];
//The spread operator will split an array into the arguments of a function
candyList.push.apply(candyList, candyArgs);
//In our brackets, we declare what will be passed in and type. afterwards we declare what it will return.
var candyShop = function () {
    document.write("Welcome to the Candy Shop! <br /><br />");
    //display each candy in our candyList
    for (var val in candyList) {
        candyList[val].displayCandy();
    }
    document.write("Candy on display: " + Candy.candyCount());
};
candyShop();

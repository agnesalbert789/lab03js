const output = document.getElementById('output');
const output2 = document.getElementById('output2');

/* STEP 1a: Create a new object using a regular function */
function createNewPerson(firstName, lastName, age, gender, interests) {
    var obj = {};
    obj.name = {
        "firstName": firstName,
        "lastName": lastName
    }
    obj.age = age;
    obj.gender = gender;
    obj.interests = interests;
    obj.bio = function () {
        return `The interests of ${this.name.firstName}, of age ${this.age}, of gender ${this.gender} are ${this.interests}.`;
    }
    obj.greeting = function () {
        return `Hello, my name is ${this.name.firstName} ${this.name.lastName}!`;
    }
    return obj;
}

/* STEP 1b: Use the console to create a new person, and then invoke the function represented by .greeting() */
let person1 = createNewPerson("Priyansh", "Thakar", 16, "Male", ["swimming", "dancing", "cooking"]);
console.log(person1.greeting());

/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions -
rewrite the above function, without returning anything. Capitalize the name of the function. */
function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName
    }
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        return `The interests of ${this.name.firstName}, of age ${this.age}, of gender ${this.gender} are ${this.interests}.`;
    }
    this.greeting = function () {
        return `Hello, my name is ${this.name.firstName} ${this.name.lastName}!`;
    }
}

/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword,
and again invoking the .greeting() method for each person */
let person2 = new Person("Priyansh", "Thakar", 16, "Male", ["swimming", "dancing", "cooking"]);
console.log(person2.greeting());

let person3 = new Person("Agnes ", "Albert", 19, "Female", ["reading", "drawing", "coding"]);
console.log(person3.greeting());

let person4 = new Person("Angela", "Albert", 42, "Female", ["painting", "playing music", "praying"]);
console.log(person4.greeting());

/* STEP 3a: Build the complete constructor for the object Person (comment out the above function first).
 Include name (first and last), age, gender, interests, bio (function), and greeting (function). */
function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName
    }
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        return `The interests of ${this.name.firstName}, of age ${this.age}, of gender ${this.gender} are ${this.interests}.`;
    }
    this.greeting = function () {
        return `Hello, my name is ${this.name.firstName} ${this.name.lastName}!`;
    }
}

/* STEP 3b: Instantiate a new Person based on the above constructor */
let person5 = new Person("Albert", "cleetus", 45, "Male", ["fishing", "sports", "hiking"]);
console.log(person5.bio());
console.log(person5.greeting());


/* STEP 3c: Attempt to access the various properties of person1 using the console. */
// person1['age']
// person1.interests[1]
// person1.bio()

console.log(person1['age']);
console.log(person1.interests[1]);
console.log(person1.bio());


/* STEP 4a: Alternatively, you can use the Object() constructor to create an object. eg. car*/
let car = new Object();

/* STEP 4b: Once 'car' is created, add various properties and methods… */
car.brand = "Honda";
car.model = "Civic";
car.startEngine = function () {
    return "Vroom!";
}
car.fun = function () {
    return "The " + this.brand + " " + this.model + " is fun to drive!";
}

/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.fun() function */
car.brand = "Toyota";
console.log(car.fun());

/* STEP 5a: Yet another approach is to use the create() method.
Let's see how the above car object can be used to create another object */
let anotherCar = Object.create(car);
/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */
output2.textContent = anotherCar.brand;

// Create a JavaScript function that permits the creation of a hamburger object
function Hamburger(bunType, pattyType, cheese, veggies, sauce, toppings) {
    this.bunType = bunType;
    this.pattyType = pattyType;
    this.cheese = cheese;
    this.veggies = veggies;
    this.sauce = sauce;
    this.toppings = toppings;
    this.getDescription = function () {
        let description = `A ${this.bunType} bun hamburger with a ${this.pattyType} patty, `;
        if (this.cheese) description += `${this.cheese} cheese `;
        if (this.veggies) description += `${this.veggies} veggies, `;
        if (this.sauce) description += `${this.sauce} sauce, `;
        if (this.toppings) description += `and ${this.toppings} toppings.`;
        return description;
    }
}

let myHamburger = new Hamburger("sesame seed", "beef", "cheddar", "lettuce, tomato, onion", "ketchup", "pickles, hot peppers");
output.textContent = myHamburger.getDescription();
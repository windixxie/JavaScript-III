/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding: the `this` value will be the window/console Object. Avoid this.
* 2. Implicit binding: only occurs with objects but not with functions, the `this` value is the Object in which the method is applied to. Automatically bound to the context of the `this` keyword.
* 3. Explicit binding: for functions - when call, apply, or bind is used (those specific methods), `this` is explicitly defined.
* 4. New binding: when constructor function is used, `this` is referring to what's returned by the constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function hello(name) {
    return `Hello ${this.name}`;
}

// Principle 2

// code example for Implicit Binding

const me = {
    name: "Winnie",
    age: 22,
    food: "noodles",
    cook: function(){
        return `${this.name} loves to cook ${this.food}`;
    }
}

// console.log(me.cook());

// Principle 3

// code example for New Binding



// Principle 4

// code example for Explicit Binding

const person = {
    "name": "Myles"
}

function introduction(skill1,skill2,skill3){
    return `Hello, my name is ${this.name} and I like to program in: ${skill1}, ${skill2}, ${skill3}`;
}

const skills = ["HTML","CSS","JS"];
//Call accepts individual arguments
// console.log(introduction.call(person,...skills));

// Apply needs an array if you want to pass in more arguments
// console.log(introduction.apply(person,skills));

// Bind is used to save the this keyword for later
// const useLater = (introduction.bind(person,...skills));

// console.log(useLater());
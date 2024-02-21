console.log("HEllp");
var value=29.9;
var b=20;
var c=value+b;
console.log(value*2)
console.log("123"+2)
console.log(12+2)
a = 0;
if (a){
    console.log("Equal");
}

var myObj={};
myObj.prop="hello";
myObj.Hey="Hi";

console.log(myObj);
var h='hi';
console.log(h);
arr = ["hiii","heeee"];
console.log(arr[0][0]);

var food = [];
food.push('Chocolate');
food.push('Ice cream');
food.push('Donut');

console.log(food[0])


function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`+ `background: ${background};`+ `font-size: ${fontSize};`
    return console.log(message,style)   
}
consoleStyler(`#1d5c63`,`#ede6db`,`40px`,'Congrats!')
// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep(energy) {
        energy=energy+10
    }
     dosomething(energy) {
        energy=energy-10
    }
}

// Task 2: Code a Worker class
class worker extends Person{

constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
       
    }    
    goToWork(xp) {
        xp = xp + 10;
        
    }
}
// Task 3: Code an intern object, run methods
function intern() {
const internObj = new worker("Bob", 21, 110);
    internObj.goToWork();
    return internObj;
}

// Task 4: Code a manager object, methods
function manager() { const managerObj = new worker("Alice", 30, 120, 100, 30);
    managerObj.dosomething();
    return managerObj;
}
    
const internObj = intern();
console.log(internObj);

const managerObj = manager();
console.log(managerObj);
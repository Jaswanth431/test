class Temp{
    constructor(name){
        this.name = name;
    }
    getName(){
        console.log(this.name);
    }
    setName(val){
        this.name = val;
    }
}

class Child extends Temp{
    constructor(name, year){
       super(name);
        this.year = year;
    }

    getyear(){
        console.log(this.name, this.year);
    }
}

let obj  = new  Child("jadda", 2001);

let c = {
    d:20

}
function func(){
    this.name = "jadda";
}
func.prototype.age = 20;
let cur = new func();
console.log(cur.age);
obj.__proto__ = c;
console.log(obj.d)


// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
  
//     speak() {
//       console.log(`${this.name} makes a noise.`);
//     }
//   }
  
//   class Dog extends Animal {
//     constructor(name) {
//       super(name); // call the super class constructor and pass in the name parameter
//     }
  
//     speak() {
//       console.log(`${this.name} barks.`);
//     }
//   }
  
//   const d = new Dog('Mitzie');
//   d.speak(); // Mitzie barks.
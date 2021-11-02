function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
	}

var car1 = new Car('Eagle', 'Talon TSi', 1993);
console.log(typeof car1,car1) //object Car { make: 'Eagle', model: 'Talon TSi', year: 1993 }

function Car(make, model, year) {
	make = make;
	model = model;
	year = year;
	}

var car1 = new Car('Eagle', 'Talon TSi', 1993);
console.log(typeof car1,car1) //object Car {}

var aa = {
    a:1,
    abc(){
        console.log("hi")
    },
    c: function() {  
        console.log(this.a);
      }
}

aa.abc() //hi
aa.c() //1

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = {name:'aa'};
  }
  var car2 = new Car('Nissan', '300ZX', 1992, 'ken');
  console.log("hi",car2) //hi Car {make: 'Nissan',model: '300ZX',year: 1992,owner: { name: 'aa' } }
  console.log(car2.owner.name)//aa


var o = {
    a: 7,
    get b() {
      return this.a + 1;
    },
    set c(x) {
      this.a = x / 2;
    }
  };
  
  console.log(o.a); // 7
  console.log(o.b); // 8 <-- At this point the get b() method is initiated.
  o.c = 50;         //   <-- At this point the set c(x) method is initiated
  console.log(o.a); // 25

var a = 5
console.log(a , typeof a)//5 number

var n = new Number(5)
console.log(n , typeof n)//[Number: 5] object

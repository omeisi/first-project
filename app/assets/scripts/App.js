var $ = require('jquery');
import Person from './modules/Person';


class Adult extends Person {
	payTax(){
		console.log(this.name + " owe 0$ in taxes");
	}
}

alert("abc 123");

var john = new Person("John Doe", "Blue");
john.greet();


var jane = new Adult("Jane Doe", "Orange");
jane.greet();
jane.payTax();




class Person {
	constructor(fullName,favColor){

		this.name = fullName;
		this.favoriteColor = favColor;
	}

	greet(){
		console.log("hello there my name is " +this.name+ " and may favorite color is " +this.favoriteColor+ "." );
	}
}

export default Person;

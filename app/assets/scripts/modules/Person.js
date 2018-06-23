function Preson (fullName,favColor){
	this.name = fullName;
	this.favoriteColor = favColor;

	this.greet = function (){
		console.log("Hello there my name is " +this.name+ " and may favorite color is " +this.favoriteColor+ "." );
	}
}

module.exports = Preson;

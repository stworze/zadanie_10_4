function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
};

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
};

var iPhone6s = new Phone("Apple", 2250, "silver");
var samsungGalaxyS6 = new Phone('Samsung', 2350, 'gold');
var onePlusOne = new Phone("OnePlus", 2000, "red");

iPhone6s.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();
// Calculate the area of a circle

function getArea(radius) {

    var area = radius * Math.PI;
    return area;
}

var circleArea = getArea(3);
console.log("The area of the circle is " + circleArea + "cm.")


// Write a JavaScript program that will calculate the price of 30 iPhones brought in from USA, where the price of one iPhone is $899.95, the customs rate is 5% and the tax rate is 18%. Modify the previous task to handle any phone at any price, with any given customs and tax rates.


function getTotalPrice (quantity, price, custom, tax) {

    var totalPrice = quantity * (price + (custom / 100 * price) + (tax / 100 * price));
    return Math.round(totalPrice);

}

var result = getTotalPrice(30, 899.95, 5, 18);
console.log("The price of 30 iPhones brought in from USA is $" + result + ".");

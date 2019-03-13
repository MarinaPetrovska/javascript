

// Write a JavaScript program that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen(alert or console.log).


function oddEven() {

    for (var i = 0; i <= 15; i++) {

        if (i % 2 == 0) {
            console.log(i + " is an even number.");

        } else {
            console.log(i + " is an odd number.");
        }
    }
}



oddEven();


// Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". (Print with console.log)

function multiplesOf() {


    for (var i = 1; i <= 100; i++) {

        if (i % 3 === 0 && i % 5 === 0) { 
            console.log("FizzBuzz");

        } else if (i % 3 === 0) {
            console.log("Fizz");

        } else if (i % 5 === 0) {
            console.log("Buzz");

        } else {
            console.log(i);

        }
    }
}


multiplesOf();


// Write a JavaScript program to find the armstrong numbers of 3 digits. Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371. 

// function threeDigitArmstrongNumber() {  solution no.1

//     for (var a = 1; a < 10; a++) {

//         for (var b = 0; b < 10; b++) {

//             for (var c = 0; c < 10; c++) {

//                 var cube = (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3));
//                 var sum = (a * 100 + b * 10 + c);

//                 if (cube == sum) {
//                     console.log(cube);
//                 }
//             }
//         }
//     }
// }

// threeDigitArmstrongNumber();


function armstrong() { // solution no.2

    for (var index = 100; index < 1000; index++) {
        var result = sumOfCubes(index); 
        if (result === index) {
            console.log(index + " is an Armstrong number.");
        }
    }
}

function sumOfCubes(number) {
    var sum = 0;

    while (number) {
        var cifra = number % 10;
        sum += Math.pow(cifra, 3);
        number = Math.floor(number / 10);
    }
    return sum;
}


armstrong();


// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

function sumOfMultiples() {
    var sum = 0;

    for (var i = 0; i < 1000; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            sum += i;
        }
    }
    console.log("The sum is " + sum + ".");
}


sumOfMultiples();

// Write a JavaScript program to get the integers in range (x, y). Input the range as parameters (start and finish). Print the sum of the numbers as a string.

function sumOfRange(min, max) { 
    var sum = 0;
    for (var index = min; index <= max; index++) {
        sum += index;

    }
    console.log("The sum is " + sum.toString() + ".");
}


sumOfRange(1, 4);




// Write a JavaScript program that will iterate through a given range of numbers (as function parameters) and sum the numbers. However, if the iteration reaches a prime number, you should skip summing that number, but continue with the loop. A prime number is a number that is divisive only with itself or 1. Print out the sum to console and the number of times you skipped summing a prime number. BONUS: Print out the prime numbers you’ve found into a string or array.

function noPrimes(min, max) {
    var sum = 0;
    for (var index = min; index <= max; index++) {
        if (!isPrime(index)) {
            sum += index;
            
        }
            else {
                console.log("you ran into a prime number.");
            }
    } console.log ("The sum of nonprime numbers in the range from", min, "to", max, "is", sum);
    
    }




function isPrime(num) {
    var sqrtnum = Math.floor(Math.sqrt(num));
    var prime = num != 1;
    for (var i = 2; i < sqrtnum + 1; i++) { // sqrtnum+1
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}


noPrimes (1,10);





// Write a function that accepts two numbers N and X. Find the closest number bigger than N that is TOTALLY DIFFERENT than the number X. A number is TOTALLY DIFFERENT from another if every digit in the first number is different than every digit of the second number. You are not permitted to use arrays or matrices (we haven’t learned them yet). It’s ok to write subprocedures (helper functions that get called in your main function).

function totallyDifferent(n, x) {
    while (true) {
        n++;
        var diffNumbers = areDifferent(n, x);
        if (diffNumbers) {
            console.log("The number", n, " is totally different than", x);
            return;
        }
    }
}

function areDifferent(num1, num2) {
    while (num1) {
        var secondary = num2;
        var firstDigit = num1 % 10;
        while (secondary) {
            var secondDigit = secondary % 10;
            if (firstDigit === secondDigit) {
                return false;
            }
            secondary = Math.floor(secondary / 10);
        }
        num1 = Math.floor(num1 / 10);
    }

    return true;
}


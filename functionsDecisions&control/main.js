// Write a function that will receive 3 parameters.Two strings and a boolean.If the boolean value is “true”, concatenate the strings.If the value is false, concatenate them in the inverse order.Think about what would happen if we enter only 1 or 2 parameters.

function concatenateValues(stringOne, stringTwo, boolean) {
    var result = 0;

    if (boolean === true) {
        result = stringOne + stringTwo + boolean;
    }
    else {
        result = boolean + stringTwo + stringOne;
    }

    console.log(result);
}

concatenateValues("Marina", "hello", 5);
concatenateValues ("Marina", "5"); 




// Calculate the tax that people need to pay for their salary.Until they reach 1000 eur, they pay 11 % tax, but when they go above 1000 eur, they pay 18 % for the sum above the threshold. (Example: 1300 eur salary, 1000 eur get taxed 11 %, 300 eur get taxed 18 %, get the total tax).Modify the function to check if the worker is a craftsman, if he is, drop the taxes to 5 % and 10 % respectively.


function salaryTax(net, type) {
    var threshold = 1000;
    var otherRegular = 11 / 100;
    var otherProgressive = 18 / 100;
    var craftRegular = 5 / 100;
    var craftProgressive = 10 / 100;
    var tax;


    if (type === "other" && net <= threshold) {
        tax = otherRegular * net;
    } else if (type === "other" && net > threshold) {
        tax = (otherRegular * threshold) + (otherProgressive * (net - threshold));
    } else if (type === "craftsman" && net <= threshold) {
        tax = craftRegular * net;
    } else if (type === "craftsman" && net > threshold) {
        tax = (craftRegular * threshold) + (
            craftProgressive * (net - threshold));
    } else {
        console.log("Please enter salary net amount and type of occupation. ");
    }

    console.log(tax);
   

}


salaryTax(1000, "other");
salaryTax(1200, "other");
salaryTax(1000, "craftsman");
salaryTax(1200, "craftsman");



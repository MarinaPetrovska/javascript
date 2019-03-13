// An old woman has 3 cats.She has to feed them every day for one week.The cats’ names are Tabby, Lizzie and Mary.Tabby likes fish and Lizzy likes chicken.Mary eats anything you give her.Help the woman feed her cats by writing a script that will feed them for a week.The actual feeding procedure is: console.log(nameofcat + “ started eating fish / chicken / whatever”);

function feedTheCats() {
    var cats = ["Tabby", "Lizzie", "Mary"];
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    for (var i = 0; i < days.length; i++) {
        var currentDay = days[i];
        for (var index = 0; index < cats.length; index++) {
            var cat = cats[index];
            if (cat === "Tabby") {
                console.log(cat + " ate fish on " + currentDay);
            } else if (cat === "Lizzie") {
                console.log(cat + " ate chicken on " + currentDay);
            } else {
                console.log(cat + " ate pork on " + currentDay);
            }
        }
    }
}

feedTheCats();


// Help a paramedic save a life! A person is unconscious and the medic needs to perform CPR. The whole process lasts one minute. Every second he has to massage the patient's heart (console.log(“performing insertAction”);). Every 15-th second he has to check his pulse and at the end of the process, he needs to declare the patient dead or alive.

function performCPR() {
    var time = 60;

    for (var i = 1; i < time; i++) {

        if (i % 15 === 0) {
            console.log("checking pulse");

        } else {
            console.log("performing insert Action");

        }
    }

    if (i = time - 1) {
        var outcome = ['The patient is alive :-)', 'The patient is dead :-('];
        var rand = Math.floor(Math.random() * outcome.length);

    }
    console.log(outcome[rand]);

}


performCPR();

// Write a script to check whether a number is a palindrome or not. Input the number as a parameter.

function isPalindrome(number) {
    var reverseNum = parseInt(number.toString().split("").reverse().join(""));
    if (number === reverseNum) {
        console.log("The number", number,"is a palindrome!");
    } else {
        console.log("The number", number, "is not a palindrome!");
    }

}

isPalindrome (121);



// A car uses 7 litres of fuel on 100km. How much fuel will the car spend driving 43 kilometers? Use a loop instead of a mathematical formula.

function fuelConsumption() {

    var distance = 100;
    var literPer100 = 7;


    for (var i = 1; i <= 43; i++) {
        var result = i / distance * literPer100;
    }

    console.log("The car will spend", result, "litres of fuel for driving 43 kilometers.");
}

fuelConsumption();


// A girl tries to impress a boy by flirting with him. Every flirt she makes is worth 1 point, every third flirt is worth 5 points and every 5th flirt is worth 10 points. Every 10th flirt the boy gets tired and deducts the girl’s points by 12. Write a function that will calculate if the girl impressed the boy or not, by accepting the number of tries the girl should use and the number of hitpoints the boy has, as function parameters.

function impressTheBoy(tries, hitpoints) {


    for (var i = 1; i < tries; i++) {

        if (i % 10 === 0) {
            hitpoints += 12;

        } else if (i % 5 === 0) {
            hitpoints -= 10;
        } else if (i % 3 === 0) {
            hitpoints -= 5;
        } else {
            hitpoints -= 1;
        }
    }
    if (hitpoints > 0) {
        console.log("The boy wins.");

    } else {
        console.log("The girl wins.");
    }
}

impressTheBoy(10, 5);


// An orc warrior is fighting a human footman. The battle ends when one of them dies. The orc has 720 hitpoints, does 23-35 damage and has 5 armor. The human footman has 550 hitpoints, does 18-27 damage, but has a shield that gives him 9 armor. Shields and armor deduct the damage that the fighter takes. Who will win the fight?


function OrcVsHumanBattle() {

    var orcHealth = 720;
    var orcMinAttack = 23;
    var orcMaxAttack = 35;
    var orcDefence = 5;


    var humanHealth = 550;
    var humanMinAttack = 18;
    var humanMaxAttack = 27;
    var humanDefence = 9;

    var turn = "HUMAN";

    while (true) {
        if (turn === "ORC") {
            humanHealth = humanHealth - getRandomInt(orcMinAttack, orcMaxAttack) + humanDefence;
            if (humanHealth <= 0) {
                console.log("The orc warrior wins.");
                console.log("orcHealth = " + orcHealth + ", humanHealth = " + humanHealth);
                return;
            }
            turn = "HUMAN";
        } else {
            orcHealth = orcHealth - getRandomInt(humanMinAttack, humanMaxAttack) + orcDefence;
            if (orcHealth <= 0) {
                console.log("The human footman wins");
                console.log("orcHealth = " + orcHealth + ", humanHealth = " + humanHealth);
                return;
            }
            turn = "ORC";
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


OrcVsHumanBattle();






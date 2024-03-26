import inquirer from "inquirer";
let myBalance = 20000;
console.log(` My current balance is ${myBalance}`);
let myPinCode = 2121;
console.log(` use this pin  ${myPinCode}`);
let enterPin = await inquirer.prompt([
    { type: "number", name: "pin", message: "Enter your pin  number?" },
]);
if (enterPin.pin === myPinCode) {
    let operationChoice = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "What do you want to do?",
            choices: ["withdraw", "checkBalance"],
        },
    ]);
    if (operationChoice.operation === "checkBalance") {
        console.log(` Your current balance is ${myBalance}`);
    }
    else if (operationChoice.operation === "withdraw") {
        let withdrawType = await inquirer.prompt([
            {
                name: "withdrawOption",
                message: "Please! Select one of the method of Withdraw",
                type: "list",
                choices: ["Manual Withdraw", "Fast Cash"],
            },
        ]);
        if (withdrawType.withdrawOption === "Manual Withdraw") {
            let selectAmount = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Please!! Select your amount...",
                },
            ]);
            if (selectAmount.amount > myBalance) {
                console.log(" Alert!! Insuffiecient Balance");
            }
            else {
                // let calculateAmount = myBalance - selectAmount.amount;
                // console.log("you remaining balance is " + calculateAmount); ////this is other to do it
                myBalance -= selectAmount.amount;
                console.log(`you remaining balance is ${myBalance}`);
            }
        }
        else if (withdrawType.withdrawOption === "Fast Cash") {
            let askFiXedAmount = await inquirer.prompt([
                {
                    name: "fixedAmount",
                    message: "Please! Select one one pakage of amount...",
                    type: "list",
                    choices: [1000, 3000, 5000, 8000, 12000, 15000],
                },
            ]);
            // which value you will get then here subtrat that from balance...
            // let calculateAmount=askFiXedAmount.fixedAmount-myBalance
            myBalance -= askFiXedAmount.fixedAmount;
            console.log(`you remaining balance is ${myBalance}`);
        }
    }
}
else {
    console.log("Alert!! Please Enter Your Correct Pin ");
}

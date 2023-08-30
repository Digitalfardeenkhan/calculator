import inquirer from "inquirer";
let { num1, num2, operation } = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter first number:",
    }, {
        name: "num2",
        type: "number",
        message: "Enter second number:",
    }, {
        name: "operation",
        type: "list",
        choices: ["addition", "subtraction", "multiplication", "division"],
        message: "Enter your operation:",
    },
]);
// console.log(answers);
if (operation === "addition") {
    console.log(`The sum of two numbers = ${num1 + num2}`);
}
else if (operation === "subtraction") {
    console.log(`The difference of two numbers = ${num1 - num2}`);
}
else if (operation === "multiplication") {
    console.log(`The multiplication of two numbers = ${num1 * num2}`);
}
else if (operation === "division") {
    console.log(`The division of two numbers = ${num1 / num2}`);
}
;
// async function func(){
//     let answers = await inquirer.prompt([{
//         name: "age",
//         type: "number",
//         message: "Enter your Age:"}
//     ]);
// }
// console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");

"use strict";
//***Index Signatures (used when we do not know the keys of our object but knows their data types)
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 40
// Note: if a property doesn't exist in our object typescript will not show us error but result will be undefined
console.log(todaysTransactions["Dave"]);
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200],
};
//console.log(Student.test)
//***key of assertion
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "name");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}

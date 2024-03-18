"use strict";

const euroToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const mapping = movements.map((movement, index, array) => movement * euroToUsd);
const filtering = movements.filter(
    function (movement, _, array) {
        return movement > 0;
    }
);

const withdrawls = movements.filter(movement => movement < 0);

const balance = movements.reduce(function (acumulator, movement, index, array) {
    console.log(`iteration ${index}: ${acumulator}`);
    return acumulator + movement;
}, 100);

const maximum = movements.reduce(function (accummulator, movement) {
    accummulator = movement > accummulator ? movement : accummulator;
    return accummulator;
});

const firstWithdrawl = movements.find(movement => movement < 0);

console.log(movements);
console.log(mapping);
console.log(filtering);
console.log(withdrawls);
console.log(balance);
console.log(`maximum balance: ${maximum}`);
console.log(`first withdrawl: ${firstWithdrawl}`);
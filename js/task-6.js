let input;
const numbers = [];
let total = 0;
do {
    input = prompt('Введите число!');
    numbers.push(input);
} while (input !== null);

for (const number of numbers) {
    total += Number(number);
}
console.log(`Общая сумма чисел равна ${total}`);

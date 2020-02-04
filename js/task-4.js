const formatString = function formatString(string) {
    const stringForFormat = string.length > 40;
    const restAfterFormat = string.length - 40;
    const messageWithoutFormat = `${string}`;
    const messageWithFormat = `${string}...`;
    if (stringForFormat) {
        string = string.substr(0, string.length - restAfterFormat);
        return messageWithFormat;
    }
    return messageWithoutFormat;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
    formatString(
        'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
);
// вернется форматированная строка

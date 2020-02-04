const logItems = function logItems(array) {
    for (let i = 0; i < array.length; i += 1) {
        const elemNum = i + 1;
        const value = array[i];
        const message = `${elemNum} - ${value}`;
        console.log(message);
    }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

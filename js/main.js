// ЗАВДАННЯ 1
console.log("ЗАВДАННЯ 1");

// Створіть функцію processArray(array, callback), 
// яка приймає масив та функцію-колбек. 
// Викличте processArray з різними масивами та функціями-колбеками, 
// щоб виконати наступні операції:
// - Порахувати суму всіх елементів масиву;
// - Знайти мінімальний елемент масиву;
// - Знайти максимальний елемент масиву.
// Перепишіть колбек-функції на стрілки.


const processArray = (array, callback) => {
    if (callback === getSum) {
        return getSum(array);
    } else if (callback === getMin) {
        return getMin(array);
    } else if (callback === getMax) {
        return getMax(array);
    }
};

const getSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i];
    }
    return sum;
};

const getMin = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i += 1) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
};

const getMax = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i += 1) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

// СУМА
const arraySum = [-3, 48, 27, 91, 65];
console.log(processArray(arraySum, getSum));

// МАКСИМАЛЬНЕ ЗНАЧЕННЯ
const arrayMin = [100, 99, 0, 57, -42];
console.log(processArray(arrayMin, getMin));

// МІНІМАЛЬНЕ ЗНАЧЕННЯ
const arrayMax = [73, -18, 34, 87, 11];
console.log(processArray(arrayMax, getMax));



// ЗАВДАННЯ 2
console.log("ЗАВДАННЯ 2");

// Створіть функцію operate(a, b, callback), 
// яка приймає два числа та колбек для виконання операції над ними. 
// Використайте її для виконання наступних операцій:
// - Додавання;
// - Віднімання;
// - Множення;
// - Ділення.
// Перепишіть колбеки на стрілкові функції.

const operate = (a, b, callback) => {
    if (callback === subtract) {
        return subtract(a, b);
    } else if (callback === add) {
        return add(a, b);
    } else if (callback === multiply) {
        return multiply(a, b);
    } else if (callback === divide) {
        return divide(a, b);
    }
};

const subtract = (a, b) => a - b;
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// ВІДНІМАННЯ
console.log(operate(10, 5, subtract)); 
// ДОДАВАННЯ
console.log(operate(10, 5, add)); 
// МНОЖЕННЯ
console.log(operate(10, 5, multiply)); 
// ДІЛЕННЯ
console.log(operate(10, 5, divide)); 
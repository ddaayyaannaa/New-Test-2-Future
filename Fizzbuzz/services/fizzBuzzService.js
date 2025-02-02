const { isPrime } = require('../utils/primeChecker');

class FizzBuzzService {
    getFizzBuzzStr(num) {
        const rules = {
            prime: { condition: () => isPrime(num), text: 'FIZZBUZZ++' },
            fizzbuzz: { condition: () => num % 15 === 0, text: 'FIZZBUZZ' },
            fizz: { condition: () => num % 3 === 0, text: 'FIZZ' },
            buzz: { condition: () => num % 5 === 0, text: 'BUZZ' }
        };

        for (const { condition, text } of Object.values(rules)) {
            if (condition()) return `${num} ${text}`;
        }

        return num.toString();
    }

    validateRange(start, end) {
        if (!Number.isInteger(start) || !Number.isInteger(end)) {
            throw new Error('Start and end must be integers');
        }
        if (start > end) {
            throw new Error('Start must be less than or equal to end');
        }
        if (start < 1) {
            throw new Error('Start must be greater than 0');
        }
    }
}

module.exports = { FizzBuzzService };
const primeCache = new Map();

function isPrime(num) {
    if (primeCache.has(num)) return primeCache.get(num);

    if (num < 2) {
        primeCache.set(num, false);
        return false;
    }

    if (num === 2) {
        primeCache.set(num, true);
        return true;
    }

    if (num % 2 === 0) {
        primeCache.set(num, false);
        return false;
    }

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            primeCache.set(num, false);
            return false;
        }
    }

    primeCache.set(num, true);
    return true;
}

module.exports = { isPrime };
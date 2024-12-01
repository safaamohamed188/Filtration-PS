var n = Number(window.prompt("Enter The First Number :"));
var m = Number(window.prompt("Enter The Second Number :"));


function findPrime(n, m) {
    
    function isPrime(num) {
        if (num < 2) return false;  // 0 and 1 are not prime numbers
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    if (n > m) {
        [n, m] = [m, n]; // Swap the values
    }

    console.log(`Prime numbers between ${n} and ${m}:`);
    for (let i = n; i <= m; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

// Example usage
findPrime(n, m);

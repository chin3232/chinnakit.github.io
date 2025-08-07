function validateInput(input) {
  const num = Number(input);
  return Number.isInteger(num) && num >= 2;
}

let input;  
while (true) {
   input = prompt("Enter a positive integer");
   if (validateInput(input)) {
     const limit = Number(input);
     const primes = findPrimes(limit);
     displayPrimes(primes, limit);
     break;
   }                                                
}   

function findPrimes(limit) {
  const primes = [];
  for (let num = 2; num <= limit; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
    }
  }
  return primes;
}

function displayPrimes(primes, limit) {
  const result = primes.length === 0 ? 'none' : primes.join(", ");
  alert(`For n = ${limit} prime numbers are: ${result}`);
}




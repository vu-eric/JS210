function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(43)); // true
console.log(isPrime(55)); // false
console.log(isPrime(0)); // false

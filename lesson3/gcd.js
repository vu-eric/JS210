function gcd(a, b) {
  for (let divisor = a; divisor >= 1; divisor--) {
    if (a % divisor === 0 && b % divisor === 0) {
      return divisor;
    }
  }
}

console.log(gcd(12, 4)); // 4
console.log(gcd(15, 10)); // 5
console.log(gcd(9, 2)); // 1

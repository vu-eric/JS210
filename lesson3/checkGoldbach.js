function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 != 0) {
    console.log(null);
    return;
  }

  for (let i = 1; i <= expectedSum / 2; i++) {
    if (isPrime(i) && isPrime(expectedSum - i)) {
      console.log(i, expectedSum - i);
    }
  }
}

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

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53

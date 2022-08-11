function logMultiples(number) {
  for (let i = 99; i >= number; i -= 2) {
    if (i % number === 0) {
      console.log(i);
    }
  }
}

logMultiples(17);

logMultiples(21);

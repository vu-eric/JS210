function multiplesOfThreeAndFive() {
  for (i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log(String(i) + "!");
    } else if (i % 5 === 0 || i % 3 === 0) {
      console.log(String(i));
    }
  }
}

multiplesOfThreeAndFive();

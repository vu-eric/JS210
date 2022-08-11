function generatePattern(nstars) {
  function generateNums(length) {
    let nums = "";
    for (let i = 1; i <= length; i++) {
      nums += String(i);
    }
    return nums;
  }

  for (let i = 1; i <= nstars; i++) {
    console.log(generateNums(i) + "*".repeat(nstars - i));
  }
}

generatePattern(7);

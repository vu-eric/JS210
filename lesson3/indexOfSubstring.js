function indexOf(firstString, secondString) {
  let count = 0;
  for (let index = 0; index < firstString.length; index++) {
    count = firstString[index] === secondString[count] ? count + 1 : 0;
    if (count === secondString.length) {
      return index - secondString.length + 1;
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  let count = secondString.length - 1;
  for (let index = firstString.length - 1; index >= 0; index--) {
    count =
      firstString[index] === secondString[count]
        ? count - 1
        : secondString.length - 1;
    if (count === -1) {
      return index;
    }
  }

  return -1;
}

console.log(indexOf("Some strings", "s")); // 5
console.log(indexOf("Blue Whale", "Whale")); // 5
console.log(indexOf("Blue Whale", "Blute")); // -1
console.log(indexOf("Blue Whale", "leB")); // -1

console.log(lastIndexOf("Some strings", "s")); // 11
console.log(lastIndexOf("Blue Whale, Killer Whale", "Whale")); // 19
console.log(lastIndexOf("Blue Whale, Killer Whale", "all")); // -1

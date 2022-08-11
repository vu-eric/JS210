function trim(string) {
  left = 0;
  right = string.length - 1;
  while (string[left] === " " || string[right] === " ") {
    if (string[left] === " ") {
      left += 1;
    }

    if (string[right] === " ") {
      right -= 1;
    }
  }

  trimmedString = "";
  for (let i = left; i <= right; i++) {
    trimmedString += string[i];
  }

  return trimmedString;
}

console.log(trim("  abc  ")); // "abc"
console.log(trim("abc   ")); // "abc"
console.log(trim(" ab c")); // "ab c"
console.log(trim(" a b  c")); // "a b  c"
console.log(trim("      ")); // ""
console.log(trim("")); // ""

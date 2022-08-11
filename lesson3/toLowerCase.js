function toLowerCase(string) {
  lowerString = "";
  for (let index = 0; index < string.length; index++) {
    if (Number(string[index])) {
      lowerString += string[index];
    } else {
      let asciiNumeric = string[index].charCodeAt(0);
      lowerString += String.fromCharCode(asciiNumeric + 32);
    }
  }

  return lowerString;
}

console.log(toLowerCase("ALPHABET")); // "alphabet"
console.log(toLowerCase("123")); // "123"
console.log(toLowerCase("abcDEF")); // "abcdef"

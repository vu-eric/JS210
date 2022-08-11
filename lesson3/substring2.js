function substring(string, start, end) {
  end = end || string.length;

  if (start > end) {
    [start, end] = [end, start];
  }

  let newString = "";
  for (let i = start; i < end; i++) {
    if (string[i] === undefined) {
      break;
    }

    newString += string[i];
  }

  return newString;
}

let string = "hello world";

console.log(substring(string, 2, 4)); // "ll"
console.log(substring(string, 4, 2)); // "ll"
console.log(substring(string, 0, -1)); // ""
console.log(substring(string, 2)); // "llo world"
console.log(substring(string, "a")); // "hello world"
console.log(substring(string, 8, 20)); // "rld"

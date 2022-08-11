function substr(string, start, length) {
  start = start < 0 ? string.length + start : start;
  substring = "";
  for (i = 0; i < length; i++) {
    if (start + i >= string.length) {
      break;
    }
    substring += string[start + i];
  }

  return substring;
}

let string = "hello world";

console.log(substr(string, 2, 4)); // "llo "
console.log(substr(string, -3, 2)); // "rl"
console.log(substr(string, 8, 20)); // "rld"
console.log(substr(string, 0, -20)); // ""
console.log(substr(string, 0, 0)); // ""

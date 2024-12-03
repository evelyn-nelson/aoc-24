import { data } from "./data.js";

const commands = data.match(/mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/gm);

console.log(commands);
let total = 0;
let execute = true;

commands.forEach((item) => {
  if (item === "don't()") {
    execute = false;
  } else if (item === "do()") {
    execute = true;
  } else if (execute === true) {
    const a = item.split(/\(|,|\)/gm);
    total += Number(a[1]) * Number(a[2]);
  }
});

console.log(total);

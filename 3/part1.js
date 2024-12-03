import { data } from "./data.js";

const commands = data.match(/mul\(\d{1,3},\d{1,3}\)/gm);

const array = commands.map((command) => command.split(/\(|,|\)/gm));

let total = 0;
array.forEach((item) => {
  total += Number(item[1]) * Number(item[2]);
});
console.log(total);

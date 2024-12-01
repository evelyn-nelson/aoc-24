import { data } from "./data.js";

const list = data.split("\n").map((row) => row.split("   "));

const first = list.map((row) => Number(row[0])).sort();
const second = list.map((row) => Number(row[1])).sort();

const count = (item, array) => {
  return array.reduce(
    (total, current) => (current === item ? total + 1 : total),
    0
  );
};

let total = 0;

first.forEach((num) => {
  total += num * count(num, second);
});

console.log(total);

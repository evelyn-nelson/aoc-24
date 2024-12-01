import { data } from "./data.js";

const list = data.split("\n").map((row) => row.split("   "));

const first = list.map((row) => Number(row[0])).sort();
const second = list.map((row) => Number(row[1])).sort();

let diffs = [];
for (let i = 0; i < list.length; i++) {
  diffs.push(Math.abs(first[i] - second[i]));
}

const sum = diffs.reduce((total, value) => total + value, 0);

console.log(sum);

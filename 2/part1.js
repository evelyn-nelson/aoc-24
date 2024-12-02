import { data } from "./data.js";

const reports = data
  .split("\n")
  .map((row) => row.split(" ").map((item) => Number(item)));
console.log(reports);
let total = [];

outside: for (let i = 0; i < reports.length; i++) {
  let direction;
  for (let j = 0; j < reports[i].length - 1; j++) {
    if (
      reports[i][j] === reports[i][j + 1] ||
      Math.abs(reports[i][j] - reports[i][j + 1]) > 3
    ) {
      continue outside;
    }
    if (direction === "asc") {
      if (reports[i][j] > reports[i][j + 1]) {
        continue outside;
      }
    } else if (direction === "desc") {
      if (reports[i][j] < reports[i][j + 1]) {
        continue outside;
      }
    } else {
      if (reports[i][j] > reports[i][j + 1]) {
        direction = "desc";
      } else {
        direction = "asc";
      }
    }
  }
  total.push(i);
}

console.log(total.length);

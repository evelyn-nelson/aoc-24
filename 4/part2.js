import { data } from "./data.js";

const m = data.split("\n").map((row) => row.split(""));
let total = 0;

for (let i = 0; i < m.length; i++) {
  for (let j = 0; j < m[i].length; j++) {
    if (
      m[i][j] === "A" &&
      i - 1 >= 0 &&
      i + 1 < m.length &&
      j - 1 >= 0 &&
      j + 1 < m[i].length
    ) {
      if (
        m[i - 1][j - 1] === "S" &&
        m[i - 1][j + 1] === "S" &&
        m[i + 1][j - 1] === "M" &&
        m[i + 1][j + 1] === "M"
      ) {
        total++;
      }
      if (
        m[i - 1][j - 1] === "S" &&
        m[i - 1][j + 1] === "M" &&
        m[i + 1][j - 1] === "S" &&
        m[i + 1][j + 1] === "M"
      ) {
        total++;
      }
      if (
        m[i - 1][j - 1] === "M" &&
        m[i - 1][j + 1] === "S" &&
        m[i + 1][j - 1] === "M" &&
        m[i + 1][j + 1] === "S"
      ) {
        total++;
      }
      if (
        m[i - 1][j - 1] === "M" &&
        m[i - 1][j + 1] === "M" &&
        m[i + 1][j - 1] === "S" &&
        m[i + 1][j + 1] === "S"
      ) {
        total++;
      }
    }
  }
}
console.log(total);

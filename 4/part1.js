import { data } from "./data.js";

const m = data.split("\n").map((row) => row.split(""));
let total = 0;

for (let i = 0; i < m.length; i++) {
  for (let j = 0; j < m[i].length; j++) {
    if (m[i][j] === "X") {
      if (
        i + 3 < m.length &&
        m[i + 1][j] === "M" &&
        m[i + 2][j] === "A" &&
        m[i + 3][j] === "S"
      ) {
        total++;
      }
      if (
        i - 3 >= 0 &&
        m[i - 1][j] === "M" &&
        m[i - 2][j] === "A" &&
        m[i - 3][j] === "S"
      ) {
        total++;
      }
      if (
        j + 3 < m[i].length &&
        m[i][j + 1] === "M" &&
        m[i][j + 2] === "A" &&
        m[i][j + 3] === "S"
      ) {
        total++;
      }
      if (
        j - 3 >= 0 &&
        m[i][j - 1] === "M" &&
        m[i][j - 2] === "A" &&
        m[i][j - 3] === "S"
      ) {
        total++;
      }
      if (
        j + 3 < m[i].length &&
        i + 3 < m.length &&
        m[i + 1][j + 1] === "M" &&
        m[i + 2][j + 2] === "A" &&
        m[i + 3][j + 3] === "S"
      ) {
        total++;
      }
      if (
        j - 3 >= 0 &&
        i + 3 < m.length &&
        m[i + 1][j - 1] === "M" &&
        m[i + 2][j - 2] === "A" &&
        m[i + 3][j - 3] === "S"
      ) {
        total++;
      }
      if (
        j + 3 < m[i].length &&
        i - 3 >= 0 &&
        m[i - 1][j + 1] === "M" &&
        m[i - 2][j + 2] === "A" &&
        m[i - 3][j + 3] === "S"
      ) {
        total++;
      }
      if (
        j - 3 >= 0 &&
        i - 3 >= 0 &&
        m[i - 1][j - 1] === "M" &&
        m[i - 2][j - 2] === "A" &&
        m[i - 3][j - 3] === "S"
      ) {
        total++;
      }
    }
  }
}
console.log(total);

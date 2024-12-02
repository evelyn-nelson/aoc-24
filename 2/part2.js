import { data } from "./data.js";

const reports = data
  .split("\n")
  .map((row) => row.split(" ").map((item) => Number(item)));
let total = [];

const check = (array) => {
  let direction;
  for (let j = 0; j < array.length - 1; j++) {
    if (array[j] === array[j + 1] || Math.abs(array[j] - array[j + 1]) > 3) {
      return false;
    }
    if (direction === "asc") {
      if (array[j] > array[j + 1]) {
        return false;
      }
    } else if (direction === "desc") {
      if (array[j] < array[j + 1]) {
        return false;
      }
    } else {
      if (array[j] > array[j + 1]) {
        direction = "desc";
      } else {
        direction = "asc";
      }
    }
  }
  return true;
};

for (let i = 0; i < reports.length; i++) {
  if (check(reports[i])) {
    total.push(i);
  } else {
    inner: for (let j = 0; j < reports[i].length; j++) {
      let test = check([...reports[i].slice(0, j), ...reports[i].slice(j + 1)]);
      if (test === true) {
        total.push(i);
        break inner;
      }
    }
  }
}

console.log(total.length);

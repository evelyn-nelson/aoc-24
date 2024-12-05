import { data } from "./data.js";

const sections = data.split("\n\n");
const rules = sections[0].split("\n").map((rule) => rule.split("|"));
const lists = sections[1].split("\n").map((list) => list.split(","));

const check = (rules, list) => {
  // console.log(list);
  for (const rule of rules) {
    // console.log(rule);
    const a = list.indexOf(rule[0]);
    const b = list.indexOf(rule[1]);
    if (a > b && a >= 0 && b >= 0) {
      // [list[a], list[b]] = [list[b], list[a]];
      return false;
    }
  }
  // return list;
  return true;
};

let orderedLists = [];
lists.forEach((list) => {
  if (check(rules, list)) {
    orderedLists.push(list);
  }
});

console.log(orderedLists.length)
let total = 0;
for (const list of orderedLists) {
  total += Number(list[Math.floor(list.length / 2)]);
}
console.log(total);

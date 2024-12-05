import { data } from "./data.js";

const sections = data.split("\n\n");
const rules = sections[0].split("\n").map((rule) => rule.split("|"));
const lists = sections[1].split("\n").map((list) => list.split(","));

const check = (rules, list) => {
  for (const rule of rules) {
    const a = list.indexOf(rule[0]);
    const b = list.indexOf(rule[1]);
    if (a > b && a >= 0 && b >= 0) {
      return false;
    }
  }
  return true;
};

const fix = (rules, list) => {
  while (!check(rules, list)) {
    for (const rule of rules) {
      const a = list.indexOf(rule[0]);
      const b = list.indexOf(rule[1]);
      if (a > b && a >= 0 && b >= 0) {
        [list[a], list[b]] = [list[b], list[a]];
      }
    }
  }
};

let badLists = [];
lists.forEach((list) => {
  if (!check(rules, list)) {
    badLists.push(list);
  }
});

let total = 0;
for (const list of badLists) {
  fix(rules, list);
  total += Number(list[Math.floor(list.length / 2)]);
}
console.log(total);

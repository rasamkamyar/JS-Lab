let body = document.querySelector("body");

let countries = [
  "iran",
  "australia",
  "brazil",
  "USA",
  "germany",
  "azabayejan",
  "finland",
  "china",
  "norway",
  "england",
  "italy",
  "georgia",
  "UAE",
  "argentina",
];

let temp = countries.map((country) => country.toLowerCase());
temp.sort();

let filteredName = temp[0][0];

let number = temp.filter((item) => item[0] === filteredName);
let result = number.length;
let title = document.createElement("h1");
let list = document.createElement("ul");
let item = document.createElement("li");

title.innerHTML = `${filteredName.toUpperCase()} (${result})`;
body.appendChild(title);
body.appendChild(list);
list.appendChild(item);
item.innerHTML = temp[0];

for (let i = 1; i < temp.length; i++) {
  if (temp[i][0] === filteredName) {
    item = document.createElement("li");
    item.innerHTML = temp[i];
    list.appendChild(item);
  } else {
    filteredName = temp[i][0];
    title = document.createElement("h1");
    number = temp.filter((item) => item[0] === filteredName);
    result = number.length;
    title.innerHTML = `${filteredName.toUpperCase()} (${result})`;
    body.appendChild(title);
    list = document.createElement("ul");
    body.appendChild(list);
    item = document.createElement("li");
    item.innerHTML = temp[i];
    list.appendChild(item);
  }
}

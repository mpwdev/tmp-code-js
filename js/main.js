const listSecondChild = document.querySelector("li:nth-child(2)");
console.log(listSecondChild);

const liFirst = document.querySelector("li");
console.log(liFirst.textContent);
console.log(liFirst.nextSibling);
console.log(liFirst.nextElementSibling);

const ul = document.querySelector("ul");
//console.log(ul.children[1]);
console.log("ul children nextsibling", ul.children[0].nextElementSibling);
console.log(
  "ul first element child",
  ul.firstElementChild.nextElementSibling.textContent
);

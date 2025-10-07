const allLis = document.querySelectorAll("li");

allLis.forEach((item) => {
  console.log(item.textContent);
});

for (const listItem of allLis) {
  console.dir(listItem);
}

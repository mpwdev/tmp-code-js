const input = document.querySelector("input");

console.log(input);

input.value = "new input value";

input.setAttribute("value", "some other default text");

input.value = input.getAttribute("value");

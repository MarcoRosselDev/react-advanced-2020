/*
    <div class="container">
      <h1>list todo</h1>
      <input type="text" class="input" />
      <button class="btn-put">put</button>
      <button class="btn-clean">clean</button>
      <div class="list"></div>
    </div>
*/

const input = document.querySelector(".input");
const btnPut = document.querySelector(".btn-put");
const btnClean = document.querySelector(".btn-clean");
const list = document.querySelector(".list");
let localStrg = JSON.parse(localStorage.getItem("list1"));
let object = [];

btnPut.addEventListener("click", function () {
  object.push(input.value);
  input.value = "";
  localStorage.setItem("list1", JSON.stringify(object));
  printDOM(object);
});

function printDOM(item) {
  let lastDOM = "";
  for (let i = 0; i < item.length; i++) {
    lastDOM += `<li>${item[i]} </li>`;
  }
  list.innerHTML = lastDOM;
}

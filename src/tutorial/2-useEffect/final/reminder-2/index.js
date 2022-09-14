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

btnPut.addEventListener("click", function () {
  printDOM();
});

function printDOM(item) {
  for (let i = 0; i < item.length; i++) {
    list.innerHTML = item[i];
  }
}

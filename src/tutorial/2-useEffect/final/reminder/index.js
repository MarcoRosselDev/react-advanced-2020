/*
      <h1>list to do</h1>
      <input type="text" class="inpt" />
      <button class="btn-print btn">put</button>
      <button class="btn-clean btn">clean</button>
      <div class="container list"></div>
*/

const inpt = document.querySelector(".inpt");
const btnPrint = document.querySelector(".btn-print");
const btnClean = document.querySelector(".btn-clean");
const list = document.querySelector(".list");
let objt = [];

btnPrint.addEventListener("click", function () {
  objt.push(inpt.value);
  inpt.value = "";
});

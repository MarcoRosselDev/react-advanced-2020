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
const isLocal = JSON.parse(localStorage.getItem("example"));
let objt = [];

if (isLocal) {
  objt = isLocal;
  printTheDom(objt);
}

btnPrint.addEventListener("click", function () {
  objt.push(inpt.value);
  inpt.value = "";
  localStorage.setItem("example", JSON.stringify(objt));
  printTheDom(objt);
});

function printTheDom(arr) {
  let printFinal = "";
  for (let i = 0; i < arr.length; i++) {
    printFinal += `<li> ${arr[i]} </li>`;
  }
  list.innerHTML = printFinal;
}

btnClean.addEventListener("dblclick", function () {
  localStorage.clear();
  objt = [];
  printTheDom(objt);
});

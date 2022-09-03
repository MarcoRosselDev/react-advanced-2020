/* form from 2.html
      <h2>memory practice list to do</h2>
      <input type="text" class="ipt" />
      <button class="btn-put btn">put</button>
      <button class="btn-clean btn">clean</button>
      <div class="list"></div>
*/

const ipt = document.querySelector(".ipt");
const btnPut = document.querySelector(".btn-put");
const btnClean = document.querySelector(".btn-clean");
const listDiv = document.querySelector(".list");
let putArr = [];

// listen to the click event

btnPut.addEventListener("click", function () {
  putArr.push(ipt.value);
  ipt.value = "";
  printDom(putArr);
});

function printDom(arr) {
  let printHtml = "";
  for (let i = 0; i < arr.length; i++) {
    printHtml += `<li>${arr[i]}</li>`;
  }
  listDiv.innerHTML = printHtml;
}

const nggBtn = document.getElementById("nggBtn");
const lable = document.getElementById("nggLable");
const minNum = 1;
const maxNum = 100;

let count = '';

nggBtn.onclick = function () {
    count = Math.floor(Math.random() * (maxNum - minNum + 1));
    lable.textContent = count;
}



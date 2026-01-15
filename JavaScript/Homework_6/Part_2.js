let arr = [2, 4, 5, 7, 9];
let sum = 0;
let equation = "";
let unorderedList = document.getElementById("list");
let Paragraph = document.getElementsByClassName("paragraph")[0];

function addNumbersAndSum() {
    for (let num of arr){
        unorderedList.innerHTML += `<li>${num}</li>`;
        sum += num;
    }
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (i === arr.length - 1) {
            equation += num; 
        } else {
            equation += num + " + ";
        }
    }

    equation += " = " + sum; 
    Paragraph.textContent = equation; 
}
addNumbersAndSum();
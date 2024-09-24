let colors = ["red", "green", "yellow", "black", "blue", "pink", "orange", "violet"];

let colorBoxEl = document.getElementById("colorBox");
colorBoxEl.style.backgroundColor = colors[0];


function changeColor(){
    let colorIndex = Math.ceil(Math.random() * (colors.length - 1));
    colorBoxEl.style.backgroundColor = colors[colorIndex];
}
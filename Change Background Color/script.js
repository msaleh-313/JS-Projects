const colors=["white","red","green","yellow","Blue","magenta"];
const body=document.querySelector("body")


const btn=document.getElementById("btn")
btn.addEventListener("click",changeColor);

function changeColor(){

    const randomIndex=Math.floor((Math.random()*colors.length));
    body.style.backgroundColor=colors[randomIndex]
}

//change mode dark and light
document.querySelector("#mode").addEventListener("click", function changeMode(){
    let element = document.body;
    element.classList.toggle("dark-mode");
    document.querySelector('#portfolio').style.color = "white";
});







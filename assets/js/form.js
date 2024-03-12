

//add event listener to change the mode
 document.querySelector("#mode").addEventListener("click", function changeMode(){
    let element = document.body;
    element.classList.toggle("dark-mode");
});


function renderInput(){

const title = localStorage.setItem("text", title);
const content = localStorage.setItem("content", content);

document.querySelector('#submit').addEventListener('click', function(event){
     event.preventDefault();
    const title = document.querySelector("#title-text").value;
    const content = document.querySelector("#content-text").value;
   
if(title === "" && content === ""){
    displayMessage('error')
} else{displayMessage('success')}

localStorage.getItem("text");
localStorage.getItem("content");

renderInput();
})

}
console.log("text");



//add event listener to change the mode
 document.querySelector("#mode").addEventListener("click", function changeMode(){
    let element = document.body;
    element.classList.toggle("dark-mode");
});


/*document.querySelector('#submit').addEventListener('click', function(event){
event.preventDefault();
window.location.replace('http://127.0.0.1:5500/blog.html');
})*/
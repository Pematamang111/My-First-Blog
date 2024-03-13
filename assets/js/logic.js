//dependencies
const nameInput = document.querySelector('#name-text');
const title = document.querySelector('#title-text');
const content = document.querySelector('#content-text');
const button = document.querySelector('#submit');

//data 
let data = [] ||  JSON.parse(localStorage.getItem('newData'));

//user interreaction
button.addEventListener('click', function(event){
event.preventDefault();

let newDataInput = {
username: nameInput.value,
title: title.value,
content: content.value.trim()
}

localStorage.setItem('newData', JSON.stringify(newDataInput));

if (data === ""){
    prompt('error');
}else{
    data.push(newDataInput);
    //document.querySelector('#contents').innerHTML = newDataInput;
    window.location.replace('http://127.0.0.1:5500/blog.html');
}
})







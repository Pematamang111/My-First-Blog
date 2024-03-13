//dependencies
const nameInput = document.querySelector('#name-text');
const title = document.querySelector('#title-text');
const content = document.querySelector('#content-text');
const button = document.querySelector('#submit');

//data 
let data = [] ||  JSON.parse(localStorage.getItem('newDataInput'));

//user interreaction
button.addEventListener('click', function(event){
event.preventDefault();

let newDataInput = {
username: nameInput.value,
title: title.value,
content: content.value
}

localStorage.setItem('newDataInput', JSON.stringify(data));

if (data === ""){
    console.log('error');
    alert("hello");
}else{
    data.push('newDataInput');
    document.createElement('h1').textContent = newDataInput.title;
    window.location.replace('http://127.0.0.1:5500/blog.html');
}
})







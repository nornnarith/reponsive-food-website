let manu = document.querySelector('#manu-bar');
let navbar = document.querySelector('.navbar');

manu.onclick = () =>{
    manu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    manu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 60){
        document.querySelector('#scroll').classList.add('active');
    }
    else{
        document.querySelector('#scroll').classList.remove('active');
    }
}

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
    setInterval(loader,3000);
}
window.onload=fadeOut();

document.querySelector("#menuButton").addEventListener('click', ()=>{
    let menu = document.querySelector('.menu');

    console.log(menu.style.left)
    if(menu.style.left === "0px"){
        menu.style.left = '-100%';
    }else{
        menu.style.left = '0px';
    }
})
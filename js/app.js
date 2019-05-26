let but = document.querySelector('#menu-but');
let reg = document.querySelector('#jk');

window.setTimeout(function(){
document.querySelector(".pre-loader").style.display=" none";
}, 4000);

reg.addEventListener('click', ()=>{
    console.log('go');
    window.location = 'https://www.yepdesk.com/-empneo-3-0';
});

but.addEventListener('click', (e)=>{
    if(document.querySelector('#drop').style.display == 'none'){
        document.querySelector('#drop').style.display = 'block';
        document.querySelector('#men').src = 'images/close.png';
    }else{
        document.querySelector('#drop').style.display = 'none'
        document.querySelector('#men').src = 'images/menu.png';
    }
    e.preventDefault();
});

window.onscroll = function(){
    if(this.oldScroll < this.scrollY && window.innerWidth <= 700){
        document.querySelector('.navbar').style.top = '10px';
    }else{
        document.querySelector('.navbar').style.top = '0px';
    }
    this.oldScroll = this.scrollY;
}

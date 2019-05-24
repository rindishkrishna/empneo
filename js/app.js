let but = document.querySelector('#button');

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

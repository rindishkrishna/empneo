let but = document.querySelector('#menu-but');

but.addEventListener('click', (e)=>{
    if(document.querySelector('#drop').style.display == 'none'){
        document.querySelector('#drop').style.display = 'block';
    }else{
        document.querySelector('#drop').style.display = 'none'
    }
});

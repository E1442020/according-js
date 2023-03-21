const toz = document.querySelectorAll('.accorr');


toz.forEach((item)=>{
    const button =item.querySelector('.btn');
    
    button.addEventListener('click',()=>{
        item.classList.toggle('showText');
    });
});


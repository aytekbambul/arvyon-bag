let ellipsis=document.getElementById('ellipsis')
let pop=document.getElementById('pop-up')
let main=document.getElementById('main')
let xmark=document.getElementById('xmark')




ellipsis.addEventListener('click',()=>{
    pop.style.transition='transform 0.5s';
    pop.style.transform='translateX(100%)';
    main.style.filter='grayscale(1)';
    document.body.style.pointerEvents = 'none';
    pop.style.pointerEvents='auto'

})

function closePop(){
    pop.style.transition='transform 0.5s';
    pop.style.transform='translateX(0%)';
    main.style.filter='grayscale(0)';
    document.body.style.pointerEvents = 'auto';
   
}

xmark.addEventListener('click',()=>{
     closePop();
})
main.addEventListener('click',()=>{
     closePop();
     
})


let card=document.getElementById('card')
let currency=document.getElementById('currency')

card.addEventListener('click',()=>{
    currency.classList.toggle('hidden');
    
})



// xmark.addEventListener('click',()=>{
//     pop.style.transition='transform 0.5s';
//     pop.style.transform='translateX(-10%)';
//     main.style.filter='grayscale(0)'
// })

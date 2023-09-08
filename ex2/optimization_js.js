let ex_1 =document.querySelector('.ex1');
ex_1.addEventListener('click',(e)=>{
    ex_1.style.border='1px solid black';
});

let ex_2 =document.querySelector('.ex2');
let ch1=0;
ex_2.addEventListener('click',(e)=>{
    ch1+=5;
    ex_2.style.borderRadius=`${ch1}px`;
});

let ex_3 =document.querySelector('.ex3_btn');
let ch2=16;
ex_3.addEventListener('click',(e)=>{
    ch2+=1;
    let element3 =document.querySelector('.ex3');
    element3.style.fontSize=`${ch2}px`;
});

let ex_4 =document.querySelector('.ex4');
ex_4.addEventListener('click',(e)=>{
    ex_4.classList.toggle('flex');
});

let ex_5=document.querySelector('.ex5');
let ex_5_one =document.querySelector('.ex5_btn_one');
let ex_5_two =document.querySelector('.ex5_btn_two');
let ch5=0;
ex_5_one.addEventListener('click',(e)=>{
    ch5+=1;
    if(ch5%2!=0){
        ex_5.insertAdjacentHTML("beforeend",`<li>Кот <span class="gray">${ch5}</span></li>`);
    }
    else{
        ex_5.insertAdjacentHTML("beforeend",`<li>Кот <span>${ch5}</span></li>`);
    }
    
});
ex_5_two.addEventListener('click',(e)=>{
    ex_5.lastChild.remove();
});

let ex_6 =document.querySelector('.ex6');
let ch6=0;
ex_6.addEventListener('click',(e)=>{
    ex_6.classList.toggle('green');
    if(ch6==0){
        ex_6.innerText='ВКЛ';
        ch6=1;
    }
    else{
        ex_6.innerText='ВЫКЛ';
        ch6=0;
    }
});

let ex_7 =document.querySelector('.ex7');
    let ex_7_w=window.innerWidth;
    let ex_7_h=window.innerHeight;
ex_7.addEventListener('click',(e)=>{
    let element_w=Math.floor(Math.random()*(ex_7_w+1));
    let element_h=Math.floor(Math.random()*(ex_7_h+1));
    ex_7.style.top=`${element_h}px`;
    ex_7.style.left=`${element_w}px`;
});

let ex_8 =document.querySelector('.ex8');
ex_8.addEventListener('click',(e)=>{
    document.querySelector('html').classList.toggle('night');
});

let ex_9=document.querySelector('.ex9');
let ex_9_element=document.querySelector('head').querySelector('title');
ex_9.addEventListener('click',(e)=>{
    ex_9_element.innerText='кавайка';
});

let ex_10 =document.querySelector('.ex10_btn');
let ex_10_element=document.querySelector('.ex10');
ex_10.addEventListener('click',(e)=>{
    for(let i=0;i<3;i++){
        let ch10=Math.floor(Math.random()*9+1)
        if(ch10>0 && ch10<6){
            ex_10_element.insertAdjacentHTML("beforeend",`<div class="red">${ch10}</div>`);
        }
        else{
            ex_10_element.insertAdjacentHTML("beforeend",`<div class="yellow">${ch10}</div>`);
        }
    }
});
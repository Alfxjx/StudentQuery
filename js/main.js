const d = document.getElementById('dropdown');
const input = document.getElementById('prov');
const button = document.querySelector('#show');
button.addEventListener('click', event=>{
    event.stopPropagation();
    if(d.style.display==="block"){
        d.style.display = "none";
    } else {
        d.style.display="block";
    }
});
const root = document.querySelector('#root');
root.addEventListener('click', event=>{
    // console.log('close');
    if(d.style.display==="block"){
        d.style.display = "none";
    }
});

const items = document.querySelectorAll('li');
for(let i =0;i<items.length;i++){
    items[i].addEventListener('click',event=>{
        input.value = items[i].innerText;
    })    
}

function query(){
    let province = document.getElementById('prov');
    let number = document.getElementById('Qnum');
    console.log(province.value);
    console.log(number.value);
    // let btnStyle = document.getElementsByClassName('btn')[0].style;
    // btnStyle.backgroundColor = 'red';
}
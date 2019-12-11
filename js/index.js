const clock = document.querySelector('.clock');

const updateTime = () => clock.innerHTML = new Date().toLocaleTimeString();
setInterval(updateTime, 1000);

const link = document.querySelector('a');
if (Math.random() > 0.5){
link.href = 'https://sj42.programmingmentor.com';
link.textContent = 'ScriptJedi42';
};


const sect = document.querySelector('section');
const para = document.createElement('p');
para.classList.add('dynamic');
para.textContent = 'We hope you enjoyed the ride.';
for (let i = 0; i < 10 ; i++){
sect.appendChild(para.cloneNode(true));
}

for (let i = 0; i < 5; i++){
    const parToRemove = document.querySelector('section p.dynamic');
    sect.removeChild(parToRemove);
}

const click = document.querySelector('.click-me');
click.addEventListener('click', btnClicked);

function btnClicked(){
    const newPara = para.cloneNode(true);
    sect.appendChild(newPara);
}
document.querySelector('.calc').addEventListener('click', calc);
document.querySelector('.clear').addEventListener('click', clear);
function calc(){
    const display = document.querySelector('.display');
    display.value = eval(display.value);
}
function clear(){
    const display = document.querySelector('.display');
    display.value = '';
}

$(.'some-fun').click(() => $('p').toggle(3000));
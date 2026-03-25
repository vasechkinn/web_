let btnR = document.getElementById('red');
let btnG = document.getElementById('green');
let btnN = document.getElementById('none_')
let listElems = document.getElementsByClassName('color');

////////////////////////////////////////////////////
btnR.addEventListener('mouseover', function(){
    btnR.style.background = 'red';
    btnR.style.color = 'white';
});
btnR.addEventListener('mouseout', function(){
    btnR.style.background = '';
    btnR.style.color = 'black';
});

btnR.onclick = function() {
    for (let i = 0; i< listElems.length; i ++) {
        listElems[i].style.color = ('red');
    }
};
////////////////////////////////////////////////////
btnG.addEventListener('mouseover', function(){
    btnG.style.background = 'green';
    btnG.style.color = 'white';
});
btnG.addEventListener('mouseout', function(){
    btnG.style.background = '';
    btnG.style.color = 'black';
});

btnG.onclick = function() {
    for (let i = 0; i< listElems.length; i ++) {
        listElems[i].style.color = ('green');
    }
};

////////////////////////////////////////////////////
btnN.onclick = function() {
    for (let i = 0; i< listElems.length; i ++) {
        listElems[i].style.color = ('');
    }
};

////////////////////////////////////////////////////
let btnSend = document.getElementById('send');
let number = document.getElementById('input_num');

btnSend.onclick = function() {
    if (number.value.length === 0) {
        alert('введите число');
        number.value = '';
    }
    else{
        alert(number.value ** 2);
        number.value = '';
    }
};

////////////////////////////////////////////////////
let firstForm = document.getElementById("input_first");
let secondForm = document.getElementById("input_second");
let buff = '';
let btnClear = document.getElementById('btn_clear')

let btnReverse = document.getElementById('btn_reverse')
btnReverse.onclick = function() {
    if (firstForm.value === "" && secondForm.value === "") {
        alert('заполните хотя бы одно поле');
        return;
    }
    buff = firstForm.value;
    firstForm.value = secondForm.value;
    secondForm.value = buff;
};

btnClear.onclick = function() {
    firstForm.value = "";
    secondForm.value = "";
};

////////////////////////////////////////////////////
let input_3 = document.getElementById('input_3');
let btnLock = document.getElementById('btn_lock');
let btnUnlock = document.getElementById('btn_unlock');

btnLock.onclick = function() {
    input_3.disabled = true;
};

btnUnlock.onclick = function() {
    input_3.disabled = false;
};

////////////////////////////////////////////////////
let n5 = document.createElement('h1');
n5.textContent = '№5';
document.body.append(n5);

let divSquare = document.createElement('div');
divSquare.classList.add('square');

divSquare.addEventListener('mouseover', () =>{
    divSquare.innerHTML = '<p>наведено (◕‿◕)</p>';
})
divSquare.addEventListener('mouseout', () =>{
    divSquare.textContent = '';
})

document.body.append(divSquare);

////////////////////////////////////////////////////
let n6 = document.createElement('h1');
n6.textContent = '№6';
document.body.append(n6);

let imgOn = document.createElement('img');
imgOn.classList.add('img_n6')
imgOn.src = 'img/on.png';
document.body.append(imgOn);

let btnOff = document.createElement('button');
btnOff.classList.add('off');
btnOff.textContent = 'off';

btnOff.addEventListener('click', () => {
    if (imgOn.src.includes('on.png')){
        imgOn.src = 'img/orig.webp';
        btnOff.classList.remove('off');
        btnOff.classList.add('on');
        btnOff.textContent = 'on';
    }
    else {
        imgOn.src = 'img/on.png';
        btnOff.classList.remove('on');
        btnOff.classList.add('off');
        btnOff.textContent = 'off';
    }
    
})
document.body.append(btnOff);
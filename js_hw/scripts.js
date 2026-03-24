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

let btnReverse = document
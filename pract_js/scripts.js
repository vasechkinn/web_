createDiv = () => {
    return document.createElement('div')
}

createParagraph = () => {
    return document.createElement('p')
}

createBtn = () => {
    return document.createElement('button');
}

// Создайте абзац и кнопку. При нажатии на кнопку абзац должен скрываться, а
//при повторном нажатии — снова показываться.
let n6 = document.createElement('h1');
n6.textContent = '№6';
document.body.append(n6);

let divN6 = createDiv();

divN6.innerHTML = `
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            ▽◕ ᴥ ◕▽
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item"> ∪･ｪ･∪ </a></li>
        <li><a class="dropdown-item"> V●ᴥ●V </a></li>
        <li><a class="dropdown-item"> ∪･ω･∪ </a></li>
        </ul>
    </div>
`

document.body.append(divN6);

// Создайте абзац и две кнопки. Первая кнопка должна увеличивать размер
// шрифта абзаца, вторая — уменьшать
let n7 = document.createElement('h1');
n7.textContent = '№7';
document.body.append(n7);

let count = 16;

let pN7 = createParagraph();
pN7.textContent = 'Любой отдельный .btn можно превратить в выпадающий список с некоторыми изменениями разметки.';

let btnPlus = createBtn();
btnPlus.classList.add('n7');
btnPlus.textContent = '+';

let btnMinus = createBtn();
btnMinus.classList.add('n7');
btnMinus.textContent = '-';

btnPlus.addEventListener('click', () => {
    count++;
    pN7.style.fontSize = count + 'px';
})

btnMinus.addEventListener('click', () => {
    count--;
    if (count === 0) {
        alert('((((((');
        count = 16;
    }

    pN7.style.fontSize = count + 'px';
})

document.body.append(pN7, btnPlus, btnMinus);

// Создайте изображение. При наведении курсора мыши картинка должна
// меняться на другую, а при уходе курсора — возвращаться обратно.
let n8 = document.createElement('h1');
n8.textContent = '№8';
document.body.append(n8);

let imgPool = document.createElement('img');
imgPool.src = 'img/pool.png';

imgPool.addEventListener('mouseover', () => {
    imgPool.src = 'img/footbal.png';
})

imgPool.addEventListener('mouseout', () => {
    imgPool.src = 'img/pool.png';
})

document.body.append(imgPool);

// Создайте блок и кнопку. При нажатии на кнопку 
// блоку должен добавляться
// класс, который меняет фон, цвет текста и рамку
let n9 = document.createElement('h1');
n9.textContent = '№9';
document.body.append(n9);

let defN9 = createDiv();

defN9.innerHTML = `
    <p> Создайте блок и кнопку. 
    При нажатии на кнопку блоку должен добавляться
    класс, который меняет фон, цвет текста и рамку </p>
`;

let btnN9 = createBtn();
btnN9.classList.add('n10');
btnN9.textContent = 'color';

btnN9.addEventListener('click', () => {
    defN9.classList.toggle('n9')
})

document.body.append(defN9, btnN9);

// Создайте блок и кнопку. 
// При каждом нажатии на кнопку класс у блока
// должен то добавляться, то удаляться.
let n10 = document.createElement('h1');
n10.textContent = '№10';
document.body.append(n10);

let divN10 = createDiv();
divN10.classList.add('class_first', 'color_first');

let btnN10 = createBtn();
btnN10.textContent = 'reverse';
btnN10.classList.add('n10');

btnN10.addEventListener('click', () => {
    divN10.classList.toggle('color_second')
})

document.body.append(divN10, btnN10);

// Создайте выпадающий список с 3 цветами, 
// абзац и кнопку. При нажатии на кнопку цвет текста 
// абзаца должен меняться в зависимости от выбранного значения.
let n11 = document.createElement('h1');
n11.textContent = '№11';
document.body.append(n11);

let divN11 = createDiv();

divN11.innerHTML = `
    <label> colors: </label>
    <select id = 'selector_color'>
        <option value= 'black'> black </option>
        <option value="brown"> brown </option>
        <option value="green"> green </option>
        <option value= 'blue'> blue </option>
    </select>
`

document.body.append(divN11);

let pN11 = createParagraph();
pN11.textContent = `Создайте выпадающий список с 3 цветами, абзац и кнопку. 
При нажатии на кнопку цвет текста абзаца должен 
меняться в зависимости от выбранного значения.`
pN11.classList.add('black');

const selectorN11 = document.getElementById('selector_color');
selectorN11.addEventListener('change', function () {
    let color = this.value;
    pN11.classList.remove('black', 'green', 'brown', 'blue');
    pN11.classList.add(color);
})

document.body.append(pN11);

// Создайте два поля ввода и кнопку. 
// При нажатии на кнопку вывести, какое
//число больше, или сообщение, что числа равны.
let n12 = document.createElement('h1');
n12.textContent = '№12';
document.body.append(n12);

let inputFirst = document.createElement('input');
inputFirst.setAttribute('placeholder', 'first input');
inputFirst.setAttribute('type', 'number');

let inputSecond = document.createElement('input');
inputSecond.setAttribute('placeholder', 'second input');
inputSecond.setAttribute('type', 'number');

let btnСompare = createBtn();
btnСompare.classList.add('n10');
btnСompare.textContent = 'compare';

btnСompare.addEventListener('click', function () {
    let firstValue = inputFirst.value;
    let secondValue = inputSecond.value;

    if (firstValue > secondValue) {
        alert(`${firstValue} > ${secondValue}`)
    } else if (firstValue < secondValue) {
        alert(`${firstValue} < ${secondValue}`)
    } else {
        alert(`${firstValue} = ${secondValue}`)
    }

    inputFirst.value = '';
    inputSecond.value = '';
})

document.body.append(inputFirst, inputSecond);
document.body.append(btnСompare);

// Создайте кнопку и абзац со значением 0. 
// При каждом клике по кнопке число увеличивается на 1, 
// но после 10 нажатий кнопка должна блокироваться.
let n13 = document.createElement('h1');
n13.textContent = '№13';
document.body.append(n13);

let btnN13 = createBtn();
btnN13.classList.add('n10');
btnN13.textContent = '+1';

let btnN13Clear = createBtn();
btnN13Clear.classList.add('n10');
btnN13Clear.textContent = 'clear';

let countN13 = 0;

let paragraphN13 = createParagraph();
paragraphN13.textContent = 0;

btnN13.addEventListener('click', () => {
    if (countN13 === 9) {
        btnN13.disabled = true
    }
    countN13++;
    paragraphN13.textContent = countN13;
})

btnN13Clear.addEventListener('click', () => {
    count = 0;
    btnN13.disabled = false;
    paragraphN13.textContent = 0;
})

document.body.append(paragraphN13, btnN13, btnN13Clear)

// Создайте кнопку. При нажатии на неё в ul 
// должно добавляться 5 пунктов списка с 
// числами от 1 до 5.
let n14 = document.createElement('h1');
n14.textContent = '№14';
document.body.append(n14);

let ulAppend = document.createElement('ul');

let btnN14 = createBtn();
btnN14.classList.add('n10');
btnN14.textContent = '+5';

btnN14.addEventListener('click', () => {
    for (let i = 0; i < 5; i++) {
        let li = document.createElement('li');
        li.textContent = i + 1;
        ulAppend.appendChild(li);
    }
})

document.body.append(btnN14, ulAppend);
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

let pN7 = createParagraph();
pN7.textContent = 'Любой отдельный .btn можно превратить в выпадающий список с некоторыми изменениями разметки.';

let btnPlus = createBtn

document.body.append(pN7);
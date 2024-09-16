//-----------------------------------------------------------------------

//Задание 5
let xhr = new XMLHttpRequest();

xhr.open('GET', 'JSON.json');

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
    } else {
        console.error('Не удалось загрузить данные:', xhr.statusText);
    }
};

xhr.onerror = function () {
    console.error('Произошла сетевая ошибка');
};

xhr.send();

//-----------------------------------------------------------------------

//Задание 4
const colorBlock = document.getElementById('color-block');

colorBlock.addEventListener('click', function () {
    colorBlock.classList.toggle('bg-color');
});

//-----------------------------------------------------------------------

//Задание 3
let seconds = 0;

const count = () => {
    const interval = setInterval(() => {
        seconds++;
        console.log(seconds); 
        if (seconds >= 10) {
            clearInterval(interval);
        }
    }, 1000);
};

//-----------------------------------------------------------------------

//Задание 2
let $seconds = 0;

const $count = () => {
    const interval = setInterval(() => {
        console.log("Прошло секунд:",$seconds++ + 1)
        if ($seconds >= 20) {
            clearInterval(interval);
        }
    }, 1000);
};

//-----------------------------------------------------------------------

//Задание 1
const name = "adsadad123451234512345asdadadsada";
const regExp = new RegExp("12345", "g")
console.log(name.match(regExp))

//-----------------------------------------------------------------------
//Задание 1:
// Напишите функцию для извлечения чисел -
// это функция которая принимает строку и
// возвращает массив всех чисел в строке
// Пример:

// function extractNumbers(str) {
//     return str.match(/\d/g).map(Number);
// }
//
// console.log(extractNumbers("a1fg5hj6"));  // Вернёт [1, 5, 6]

//---------------------------------------------------------------------------

//Задание 2
//Напишите функцию рекурсию которая будет выводить в консоль числа фибоначчи
// с задержкой в одну секунду (ограничение число 144)

// function fibonacci(n, a = 0, b = 1) {
//     if (a > 144) return;
//     console.log(a);
//
//     setTimeout(() => {
//         fibonacci(n + 1, b, a + b);
//     }, 1000);
// }
//
// fibonacci(0);

//---------------------------------------------------------------------------

//Задание 3
//Сделать запрос на API используя async await и try catch
// Делайте запроса на этот API => https://fakestoreapi.com/products
// Из полученных данных возьмите ключ title у каждого объекта и выведите их в консоль

// async function fetchProductTitles() {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const products = await response.json();
//
//         products.forEach(product => {
//             console.log(product.title);
//         });
//     } catch (error) {
//         console.error('Ошибка при получении данных:', error);
//     }
// }
//
// fetchProductTitles();


//---------------------------------------------------------------------------

//Задание 4
//Создайте 5 кнопок внутри которого будут названия цветов на английском
// Пример:

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Меняем цвет фона в зависимости от id кнопки
        document.body.style.backgroundColor = button.id;
    });
});

//---------------------------------------------------------------------------

//Задание 5
//Создайте кнопку которая будет отображать блок либо скрывать его
//Надо сделать блок просто квадратным, а рядом кнопка ,
// если нажать на  неё то блок скроется,
// если снова нажать на ту же кнопку то блок снова покажется

const square = document.getElementById('square');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {

    if (square.style.display === 'none') {

        square.style.display = 'block';
        toggleBtn.textContent = 'Скрыть блок';
    } else {

        square.style.display = 'none';
        toggleBtn.textContent = 'Показать блок';
    }
});


//---------------------------------------------------------------------------

//Задание 6
//Отобразите на странице цифру ноль и начните его увеличивать на +1 каждую мили-секунду
// - остановите отсчёт когда счётчик дойдёт до 100

// function lol(n) {
//     const counter = document.getElementById('counter');
//     if (n > 100) return;
//
//     counter.textContent = n;
//     setTimeout(() => {
//         lol(n + 1);
//     }, 1);
// }
//
// lol(0);

//---------------------------------------------------------------------------
//Задание 7
//Создайте кнопку при нажатии на которую будет отправляться GET запрос на JSON
// и полученные данные от туда выводите в консоль (JSON создавайте на своё усмотрение)
// используйте async await

// document.getElementById('fetchBtn').addEventListener('click', async () => {
//     try {
//         const response = await fetch('products.json');
//         if (!response.ok) {
//             throw new Error('Сеть не в порядке');
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Ошибка:', error);
//     }
// });


//---------------------------------------------------------------------------
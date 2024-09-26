const tabContentBlock = document.querySelectorAll('.tab_content_block');
const tabContentItem = document.querySelectorAll('.tab_content_item');
const tabContentItemsParent = document.querySelector('.tab_content_items');
let currentTab = 0; 
let autoSliderInterval;

const hideTabContent = () => {
    tabContentBlock.forEach((block) => {
        block.style.display = 'none';
    });
    tabContentItem.forEach((item) => {
        item.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (id = 0) => {
    tabContentBlock[id].style.display = 'block';
    tabContentItem[id].classList.add('tab_content_item_active');
};

hideTabContent();
showTabContent();


const startAutoSlider = () => {
    autoSliderInterval = setInterval(() => {
        currentTab = (currentTab + 1) % tabContentBlock.length; 
        hideTabContent();
        showTabContent(currentTab);
    }, 3000);
};

const stopAutoSlider = () => {
    clearInterval(autoSliderInterval); 
};

startAutoSlider(); 


tabContentItemsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabContentItem.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent();
                showTabContent(index);
                currentTab = index;
                stopAutoSlider();
                startAutoSlider(); 
            }
        });
    }
};

//DRY - don't repeat yourself
//KISS - keep it simple, stupid
const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const beliInput = document.querySelector('#beli');

const converter = (element, targetElement1, targetElement2) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/convertor.json');
        request.send();

        request.onload = () => {
            const data = JSON.parse(request.response);

            if (element.id === "som") {
                targetElement1.value = (element.value / data.usd).toFixed(2);
                targetElement2.value = (element.value / data.beli).toFixed(2);
            }
            if (element.id === "usd") {
                targetElement1.value = (element.value * data.usd).toFixed(2);
                targetElement2.value = (element.value * data.beli).toFixed(2);
            }
            if (element.id === "beli") {
                targetElement1.value = (element.value * data.beli).toFixed(2);
                targetElement2.value = (element.value / data.usd).toFixed(2);
            }
        };
    };
};

converter(somInput, usdInput, beliInput);
converter(usdInput, somInput, beliInput);
converter(beliInput, somInput, usdInput);


//CARD SWITCHER
const card = document.querySelector('.card');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');

let cardId = 199;


const updateCard = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => res.json())
        .then(data => {
            card.innerHTML = `
                    <p>${data.title}</p>
                    <p style="color: ${data.completed ? 'green' : 'red'}">
                        ${data.completed ? 'Completed' : 'Not completed'}
                    </p>
                    <span>Card ID: ${data.id}</span>
                `;
        });
};

updateCard(cardId);

btnNext.onclick = () => {
    cardId = (cardId % 200) + 1;
    updateCard(cardId);
};

btnPrev.onclick = () => {
    cardId = (cardId - 1 + 200 - 1) % 200 + 1;
    updateCard(cardId);
};

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });

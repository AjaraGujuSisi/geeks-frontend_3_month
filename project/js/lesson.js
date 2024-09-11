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

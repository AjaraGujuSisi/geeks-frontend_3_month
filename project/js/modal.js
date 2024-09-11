const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');
const modalCloseButton = document.querySelector('.modal_close');


const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; 
};


const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = ''; 
};


setTimeout(openModal, 10000);


modalTrigger.onclick = openModal;
modalCloseButton.onclick = closeModal;


modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
};


const showModalOnScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        openModal();
        window.removeEventListener('scroll', showModalOnScroll);
    }
};


window.addEventListener('scroll', showModalOnScroll);

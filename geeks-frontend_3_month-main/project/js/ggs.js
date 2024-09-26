const cardContainer = document.getElementById('card-container');
const backButton = document.getElementById('button');

async function fetchCardData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
        const data = await response.json();
        renderCards(data);
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        cardContainer.innerHTML = <p>Не удалось загрузить данные. Попробуйте позже.</p>;
    }
}

function renderCards(cards) {
    const imageUrl = '../image/psina.jpg';

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <img src="${imageUrl}" alt="Card Image">
            <h2>${card.title}</h2>
            <p>${card.body}</p>
        `;
        cardContainer.appendChild(cardElement);
    });
}

backButton.addEventListener('click', () => {
    window.history.back();
});
fetchCardData();
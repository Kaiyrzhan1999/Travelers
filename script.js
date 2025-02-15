const groupsGrid = document.getElementById('groups-grid');
const dishesSection = document.getElementById('dishes-section');
const dishesGrid = document.getElementById('dishes-grid');
const modal = document.getElementById('dish-modal');
const closeBtn = document.querySelector('.close');
const backButton = document.getElementById('back-button');
const content = document.querySelector('.content');

const groupImages = {
    'breakfasts': 'https://example.com/breakfast.jpg',
    'main-dishes': 'https://example.com/main-dishes.jpg',
    'salads-and-appetizers': 'https://example.com/salads.jpg',
    'soups': 'https://example.com/soups.jpg',
    'desserts-and-bakery': 'https://example.com/desserts.jpg',
    'drinks': 'https://example.com/drinks.jpg'
};

const dishes = {
    'breakfasts': [
        { name: 'Авокадо тост', price: '800 тг', image: 'Авокадо тост.jpeg', description: 'Хрустящий тост с авокадо и яйцом пашот.' },
        { name: 'Баварский завтрак', price: '1200 тг', image: 'Баварский завтрак.jpeg', description: 'Колбаски, яйца, картофель и свежая выпечка.' },
        // Добавьте остальные блюда для этой группы
    ],
    'main-dishes': [
        { name: 'Куриная грудка на гриле', price: '1500 тг', image: 'Куриная грудка на гриле с грибным соусом.jpeg', description: 'Сочная куриная грудка с ароматным грибным соусом.' },
        { name: 'Лапша-вок с говядиной', price: '1800 тг', image: 'Лапша-вок с говядиной.jpeg', description: 'Жареная лапша с нежной говядиной и овощами.' },
        // Добавьте остальные блюда для этой группы
    ],
    // Добавьте остальные группы блюд
};

function initializeGroups() {
    const groupCards = document.querySelectorAll('.group-card');
    groupCards.forEach(card => {
        const group = card.dataset.group;
        card.style.backgroundImage = `url('${groupImages[group]}')`;
        card.addEventListener('click', () => showDishes(group));
    });
}

function showDishes(group) {
    groupsGrid.classList.add('hidden');
    dishesSection.classList.remove('hidden');
    dishesGrid.innerHTML = '';
    content.style.flexDirection = 'column';

    dishes[group].forEach(dish => {
        const dishCard = document.createElement('div');
        dishCard.classList.add('dish-card');
        dishCard.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}">
            <div class="dish-info">
                <div class="dish-name">${dish.name}</div>
                <div class="dish-price">${dish.price}</div>
            </div>
        `;
        dishCard.addEventListener('click', () => showModal(dish));
        dishesGrid.appendChild(dishCard);
    });
}

function showGroups() {
    groupsGrid.classList.remove('hidden');
    dishesSection.classList.add('hidden');
    content.style.flexDirection = 'row';
}

function showModal(dish) {
    document.getElementById('modal-image').src = dish.image;
    document.getElementById('modal-name').textContent = dish.name;
    document.getElementById('modal-price').textContent = dish.price;
    document.getElementById('modal-description').textContent = dish.description;
    modal.style.display = 'block';
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

backButton.addEventListener('click', showGroups);

// Инициализация групп при загрузке страницы
initializeGroups();

// Установка начального состояния экрана
function setInitialState() {
    const topSection = document.querySelector('.top-section');
    const menuSection = document.querySelector('.menu-section');
    
    topSection.style.height = '50%';
    menuSection.style.height = '50%';
}

// Вызов функции установки начального состояния при загрузке страницы
window.addEventListener('load', setInitialState);
import animals from '../data/animals.json';
import flowers from '../data/flowers.json';
import fruits from '../data/fruits.json';
import nature from '../data/nature.json';
import people from '../data/people.json';
import sea from '../data/sea.json';

const currentLanguage = 'en';

const allPaintings = [
  ...animals,
  ...flowers,
  ...fruits,
  ...nature,
  ...people,
  ...sea,
];

function initializeLightbox() {
  new SimpleLightbox('.gallery-item', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });
}

const basePath = import.meta.env.BASE_URL;
function createPaintingCard(painting) {
  const card = document.createElement('a');
  card.href = `${basePath}${painting.image}`;
  card.classList.add('gallery-item');
  card.innerHTML = `
    <img 
      src="${basePath}${painting.thumbnail}" 
      alt="${painting.title[currentLanguage]} (${painting.description[currentLanguage]})" 
      loading="lazy"
    />
  `;
  return card;
}

function renderGallery(paintings) {
  const gallery = document.querySelector('.paintings-grid');
  gallery.innerHTML = '';

  paintings.forEach(painting => {
    const card = createPaintingCard(painting);
    gallery.appendChild(card);
  });

  initializeLightbox();
}

function getCategoryFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('category') || 'all';
}

function filterPaintingsByCategory(category) {
  if (category === 'all') {
    return allPaintings;
  }
  return allPaintings.filter(painting => painting.category === category);
}

function setupCategoryButtons() {
  const categoryButtons = document.querySelectorAll('.categories-nav a');
  const currentCategory = getCategoryFromURL();

  categoryButtons.forEach(button => {
    const buttonCategory = button.dataset.category;

    if (buttonCategory === currentCategory) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }

    button.addEventListener('click', event => {
      event.preventDefault();

      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const category = button.dataset.category;
      const paintingsToShow = filterPaintingsByCategory(category);
      renderGallery(paintingsToShow);

      history.pushState(null, '', `?category=${category}`);
    });
  });
}

function init() {
  const category = getCategoryFromURL();
  const paintingsToShow = filterPaintingsByCategory(category);

  renderGallery(paintingsToShow);
  setupCategoryButtons();
}

init();

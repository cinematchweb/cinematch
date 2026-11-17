import { movieCard } from './movie-card.js';
export function renderMovieGrid(container, items, className = 'grid') {
  container.className = className;
  container.replaceChildren();
  if (!items.length) {
    const empty = document.createElement('p');
    empty.className = 'empty-state';
    empty.textContent = 'No encontramos títulos en esta categoría todavía.';
    container.append(empty);
    return;
  }
  items.forEach(movie => container.append(movieCard(movie)));
}

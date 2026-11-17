export function movieCard(movie) {
  const article = document.createElement('article');
  article.className = 'movie';
  article.tabIndex = 0;
  article.setAttribute('role', 'button');
  article.setAttribute('aria-label', `Ver detalles de ${movie.t}`);
  article.innerHTML = `
    <div class="poster" style="--c1:${movie.c1};--c2:${movie.c2}" data-mark="${movie.m}">
      <b>${escapeHTML(movie.t)}</b>
    </div>
    <h3>${escapeHTML(movie.t)}</h3>
    <small>${escapeHTML(movie.y)}</small>`;
  const open = () => window.dispatchEvent(new CustomEvent('cinematch:movie', { detail: movie.t }));
  article.addEventListener('click', open);
  article.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); }
  });
  return article;
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

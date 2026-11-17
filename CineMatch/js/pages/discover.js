import { movieService } from '../services/movie-service.js';
import { renderMovieGrid } from '../components/movie-grid.js';
import { collectionService } from '../services/collection-service.js';
export function renderDiscover(main) {
  const all = movieService.getAll();
  const collection = collectionService.get();
  const available = all.filter(movie => !collection.interested.includes(movie.t) && !collection.dismissed.includes(movie.t));
  const recommendation = available[0] || all[0];
  main.innerHTML = `<div class="content"><div class="eyebrow">Personalizado</div><h1 class="page-title">Descubrir</h1>
    <p class="muted">Explora títulos y construye tu colección cinematográfica.</p>
    <div class="panel" style="margin:20px 0"><div class="eyebrow">Tu recomendación del día</div>
      <h2 style="font-size:26px;margin:8px 0">${recommendation.t}</h2><p class="muted">${recommendation.y}</p>
      <div class="actions"><button class="btn primary" data-movie="${recommendation.t}">Ver ficha</button><button class="btn ghost" data-interest="${recommendation.t}">♡ Me interesa</button><button class="btn ghost" data-dismiss="${recommendation.t}">Pasar</button></div>
    </div>
    <section class="section"><div class="sectionhead"><h2>Una selección diferente</h2></div><div id="different" class="cards"></div></section>
    <section class="section"><div class="sectionhead"><h2>Para una noche de cine</h2></div><div id="tonight" class="cards"></div></section>
    <div class="notice" id="collection-status">Tus selecciones se guardan localmente en este dispositivo en esta versión de prueba.</div></div>`;
  renderMovieGrid(main.querySelector('#different'), all.slice(1,6), 'cards');
  renderMovieGrid(main.querySelector('#tonight'), all.slice(2,7), 'cards');
}

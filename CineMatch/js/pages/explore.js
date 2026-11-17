import { movieService } from '../services/movie-service.js';
import { renderMovieGrid } from '../components/movie-grid.js';
export function renderExplore(main) {
  main.innerHTML = `<div class="content"><div class="eyebrow">Catálogo</div><h1 class="page-title">Explorar</h1>
    <p class="muted">Encuentra tu próxima historia favorita.</p>
    <div class="chips" id="filters">
      ${['Todos','Películas','Series','Anime','Documentales'].map((item,index)=>`<button class="chip ${index===0?'active':''}" data-filter="${item}">${item}</button>`).join('')}
    </div>
    <div class="panel search-panel"><input id="movie-search" class="input" type="search" placeholder="Buscar títulos o géneros…" aria-label="Buscar películas"></div>
    <div class="grid" id="results"></div></div>`;
  const results = main.querySelector('#results');
  const search = main.querySelector('#movie-search');
  let category = 'Todos';
  const update = () => {
    const filtered = movieService.filter(category);
    const term = search.value.trim().toLocaleLowerCase('es');
    renderMovieGrid(results, filtered.filter(m => !term || m.t.toLocaleLowerCase('es').includes(term) || m.y.toLocaleLowerCase('es').includes(term)));
  };
  main.querySelector('#filters').addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    category = button.dataset.filter;
    main.querySelectorAll('[data-filter]').forEach(item => item.classList.toggle('active', item === button));
    update();
  });
  search.addEventListener('input', update);
  update();
}

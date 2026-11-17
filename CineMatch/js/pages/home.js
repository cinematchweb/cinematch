import { movieService } from '../services/movie-service.js';
import { renderMovieGrid } from '../components/movie-grid.js';
export function renderHome(main) {
  const movies = movieService.getAll();
  main.innerHTML = `<div class="content">
    <section class="hero"><div class="hero-copy">
      <div class="eyebrow">Tu universo cinematográfico</div>
      <h1>Historias que<br>te encuentran.</h1>
      <p>Descubre tu próxima película favorita y conecta con personas que comparten tu pasión por el cine.</p>
      <div class="meta">PELÍCULA DESTACADA · CIENCIA FICCIÓN · 2024</div>
      <div class="actions"><button class="btn primary" data-movie="Dune: Parte Dos">Explorar película ↗</button><button class="btn ghost" data-page-link="discover">Descubrir</button></div>
    </div></section>
    <section class="section"><div class="sectionhead"><h2>Tendencias ahora</h2><button class="link" data-page-link="explore">Ver todo →</button></div><div id="trending" class="cards"></div></section>
    <section class="section"><div class="sectionhead"><h2>Recomendado para ti</h2><button class="link" data-page-link="explore">Ver todo →</button></div><div id="recommended" class="cards"></div></section>
    <section class="section"><div class="sectionhead"><h2>Universo anime</h2></div><div id="anime" class="cards"></div></section>
    <div class="footer-note">CINEMATCH · PROTOTIPO MODULAR V1.1</div></div>`;
  renderMovieGrid(main.querySelector('#trending'), movies.slice(0,5), 'cards');
  renderMovieGrid(main.querySelector('#recommended'), movies.slice(3,8), 'cards');
  renderMovieGrid(main.querySelector('#anime'), movies.filter(m => m.y.includes('Anime')), 'cards');
}

import { movieService } from '../services/movie-service.js';
export function renderMovieDetail(main, title) {
  const movie = movieService.find(title);
  main.innerHTML = `<div class="content"><button class="link" data-page-link="home">← Volver</button>
    <div class="hero detail-hero" style="margin-top:15px;min-height:270px;background:linear-gradient(90deg,#09090df0,#09090d55),linear-gradient(135deg,${movie.c1},${movie.c2})">
      <div class="hero-copy"><div class="eyebrow">Ficha cinematográfica · Demo</div><h1>${movie.t}</h1><div class="meta">${movie.y} · Ficha de ejemplo</div>
        <div class="actions"><button class="btn primary" data-interest="${movie.t}">♡ Me interesa</button><button class="btn ghost" data-dismiss="${movie.t}">Pasar</button></div></div></div>
    <section class="section panel"><h2>Sinopsis</h2><p class="muted">Esta ficha utiliza datos de demostración. En una siguiente fase añadiremos sinopsis, reparto, dirección, duración, puntuaciones e imágenes desde una fuente autorizada.</p></section>
    <div class="notice">Ficha de prueba: los datos no representan todavía un catálogo conectado.</div></div>`;
}

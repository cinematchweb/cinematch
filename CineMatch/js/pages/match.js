export function renderMatch(main) {
  main.innerHTML = `<div class="content"><div class="eyebrow">Comunidad +18</div><h1 class="page-title">CineMatch</h1>
    <p class="muted">Conecta con personas que ven el mundo a través de historias parecidas.</p>
    <div class="panel" style="margin:20px 0"><span class="pill">Experiencia social para mayores de 18</span>
      <h2 style="font-size:25px;margin:14px 0 6px">Tu próxima conexión puede empezar con una película.</h2>
      <p class="muted">Descubre compatibilidades según tus géneros, favoritos y preferencias.</p>
      <button class="btn primary" data-action="match-info">Ver cómo funciona</button></div>
    <section class="section"><div class="sectionhead"><h2>Perfiles de ejemplo</h2><span class="pill">Datos ficticios</span></div>
      <div class="panel matchcard"><div class="matchpic">A</div><div style="flex:1"><b>Alex, 26</b><div class="muted" style="font-size:12px">Ciencia ficción · Anime · Drama</div></div><span class="pill">92% afín</span></div>
      <div class="panel matchcard" style="margin-top:10px"><div class="matchpic" style="background:linear-gradient(135deg,#a75c78,#49356c)">M</div><div style="flex:1"><b>Mar, 24</b><div class="muted" style="font-size:12px">Terror · Fantasía · Documentales</div></div><span class="pill">87% afín</span></div>
    </section><div class="notice">Los matches y perfiles son demostrativos. No hay usuarios reales ni mensajes enviados.</div></div>`;
}

import { collectionService } from '../services/collection-service.js';
export function renderProfile(main) {
  const collection = collectionService.get();
  main.innerHTML = `<div class="content"><div class="eyebrow">Tu espacio</div><h1 class="page-title">Mi perfil</h1>
    <div class="panel" style="margin-top:20px"><div class="profilehead"><div class="bigavatar">C</div><div><h2 style="margin:0">Invitado CineMatch</h2><div class="muted" style="font-size:12px">Perfil de demostración</div><span class="pill">Cuenta no conectada</span></div></div>
      <div class="stats"><div class="stat"><b>${collection.interested.length}</b><small>Me interesan</small></div><div class="stat"><b>${collection.dismissed.length}</b><small>Descartadas</small></div><div class="stat"><b>18+</b><small>Social</small></div></div></div>
    <section class="section"><h2>Configuración</h2><div class="panel" style="margin-top:12px;display:grid;gap:16px"><div>◉　Editar perfil (próximamente)</div><div>♡　Mis preferencias (próximamente)</div><div>文　Idioma: Español</div><div>♧　Privacidad y seguridad</div><div>ⓘ　Acerca de CineMatch</div></div></section>
    <div class="notice">Esta versión no tiene registro ni autenticación. Las selecciones de películas se guardan localmente en este dispositivo.</div></div>`;
}

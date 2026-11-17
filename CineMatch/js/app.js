import { navigate, showMovie } from './router.js';
import { collectionService } from './services/collection-service.js';

document.addEventListener('click', event => {
  const pageButton = event.target.closest('[data-page]');
  if (pageButton) { navigate(pageButton.dataset.page); return; }

  const pageLink = event.target.closest('[data-page-link]');
  if (pageLink) { navigate(pageLink.dataset.pageLink); return; }

  const movieButton = event.target.closest('[data-movie]');
  if (movieButton) { showMovie(movieButton.dataset.movie); return; }

  const interestButton = event.target.closest('[data-interest]');
  if (interestButton) {
    const data = collectionService.setInterest(interestButton.dataset.interest);
    const status = document.querySelector('#collection-status');
    if (status) status.textContent = `Guardada en “Me interesa”. Total: ${data.interested.length}.`;
    else alert('Película añadida a tu colección de interés en este dispositivo.');
    return;
  }

  const dismissButton = event.target.closest('[data-dismiss]');
  if (dismissButton) {
    collectionService.dismiss(dismissButton.dataset.dismiss);
    alert('Película descartada en este dispositivo.');
    return;
  }

  const action = event.target.closest('[data-action]')?.dataset.action;
  if (action === 'go-explore') navigate('explore');
  if (action === 'go-profile') navigate('profile');
  if (action === 'match-info') alert('La compatibilidad real, las cuentas y los matches se desarrollarán en una fase posterior.');
});

window.addEventListener('cinematch:movie', event => showMovie(event.detail));
navigate('home');

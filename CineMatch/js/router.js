import { renderHome } from './pages/home.js';
import { renderExplore } from './pages/explore.js';
import { renderDiscover } from './pages/discover.js';
import { renderMatch } from './pages/match.js';
import { renderProfile } from './pages/profile.js';
import { renderMovieDetail } from './pages/movie-detail.js';

const pages = { home: renderHome, explore: renderExplore, discover: renderDiscover, match: renderMatch, profile: renderProfile };
export function navigate(page) {
  const main = document.querySelector('#main');
  (pages[page] || renderHome)(main);
  document.querySelectorAll('.nav button').forEach(button => button.classList.toggle('active', button.dataset.page === page));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
export function showMovie(title) {
  renderMovieDetail(document.querySelector('#main'), title);
  document.querySelectorAll('.nav button').forEach(button => button.classList.remove('active'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

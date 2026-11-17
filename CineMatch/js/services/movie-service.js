import { movies } from '../data/movies.js';

// Fuente local temporal. Más adelante se conectará una API cinematográfica.
export const movieService = {
  getAll() { return [...movies]; },
  search(query) {
    const term = query.trim().toLocaleLowerCase('es');
    if (!term) return this.getAll();
    return movies.filter(movie =>
      movie.t.toLocaleLowerCase('es').includes(term) ||
      movie.y.toLocaleLowerCase('es').includes(term)
    );
  },
  filter(category) {
    if (category === 'Todos' || category === 'Películas') return this.getAll();
    if (category === 'Series') return [];
    if (category === 'Anime') return movies.filter(movie => movie.y.includes('Anime'));
    if (category === 'Documentales') return movies.filter(movie => movie.y.includes('Documental'));
    return movies.filter(movie => movie.y.toLowerCase().includes(category.toLowerCase()));
  },
  find(title) { return movies.find(movie => movie.t === title) || movies[0]; }
};

# CineMatch — Prototipo modular V1.1

Primera migración del prototipo visual a una estructura modular. Conserva la identidad visual original y separa estilos, páginas, componentes y servicios.

## Qué incluye
- Inicio, Explorar, Descubrir, Match y Perfil.
- Catálogo local temporal de ocho títulos de demostración.
- Búsqueda por título y género.
- Filtros por categoría.
- Ficha de película demostrativa.
- Acciones “Me interesa” y “Pasar”, guardadas localmente en el navegador.
- Diseño adaptable a móvil y escritorio.

## Cómo probarlo
1. Descarga y descomprime el ZIP.
2. Abre la carpeta con un editor o servidor estático que admita módulos JavaScript.
3. Ejecuta `index.html` mediante un servidor local/preview. No todos los navegadores permiten módulos ES al abrir el archivo directamente como `file://`.

## Limitaciones actuales
- No hay API cinematográfica conectada.
- No hay Supabase ni autenticación.
- Los perfiles y porcentajes de Match son ficticios.
- Las selecciones se guardan solo en el almacenamiento local del dispositivo.

## Estructura
- `index.html`: punto de entrada.
- `css/`: estilos globales, componentes y responsive.
- `js/app.js`: eventos e inicialización.
- `js/router.js`: navegación.
- `js/pages/`: vistas.
- `js/components/`: componentes reutilizables.
- `js/services/`: acceso a datos y colección local.
- `js/data/`: catálogo temporal.

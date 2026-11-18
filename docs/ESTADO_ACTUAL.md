# CineMatch — Estado actual

Última actualización: 18/11/2026

## Proyecto
- Nombre: CineMatch
- Prototipo: V1.1
- Repositorio: cinematchweb/cinematch
- Rama: main
- Entorno de desarrollo: Android + Termux
- ZIP original: CineMatch_Prototipo_Modular_V1.1.zip

## Implementado en el prototipo
- Inicio, Explorar, Descubrir, Match y Perfil.
- Catálogo local de ocho títulos de demostración.
- Búsqueda por título y género.
- Filtros por categoría.
- Fichas de películas.
- Acciones Me interesa y Pasar.
- Almacenamiento local de selecciones.
- Diseño adaptable a móviles y escritorio.

## Estructura conocida
CineMatch/
- README.md
- index.html
- css/
  - components.css
  - main.css
  - responsive.css
- js/
  - app.js
  - router.js

El README del prototipo también documenta páginas,
componentes, servicios y datos locales.

## Supabase
- Proyecto creado.
- URL: https://hbqhnkuqryyfniltsgcz.supabase.co
- Tabla profiles trabajada.
- Relación profiles.id con auth.users.id.
- Políticas RLS iniciales trabajadas.
- Configuración de autenticación por correo revisada.
- Falta verificar la configuración completa y conectar el código.

## Google
- Proyecto Google Cloud: cinematchweb.
- Consentimiento OAuth iniciado.
- Configuración de dominios y enlaces legales pendiente.
- Integración aplazada hasta tener dominio público.

## Pendiente inmediato
1. Verificar Supabase.
2. Documentar y respaldar SQL.
3. Conectar Supabase al frontend.
4. Implementar autenticación por correo.
5. Conectar perfiles.
6. Integrar API de películas.
7. Integrar noticias.
8. Implementar Match real.
9. Crear documentos legales.
10. Probar y publicar.

## Advertencias
El prototipo todavía utiliza datos locales.
No asumir que las funciones de demostración funcionan
con cuentas reales ni que Supabase está conectado.

## Regla
Actualizar este documento después de cada avance
importante del proyecto.

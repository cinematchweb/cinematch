# CineMatch — Estado actual

Última actualización: 18/11/2026

## Proyecto
- Nombre: CineMatch
- Prototipo: V1.1
- Repositorio: cinematchweb/cinematch
- Rama: main
- Entorno de desarrollo: Android + Termux
- ZIP original: CineMatch_Prototipo_Modular_V1.1.zip
- Último commit de referencia: 05acaff

## Implementado en el prototipo
- Inicio, Explorar, Descubrir, Match y Perfil.
- Catálogo local de ocho títulos de demostración.
- Búsqueda por título y género.
- Filtros por categoría.
- Fichas de películas.
- Acciones Me interesa y Pasar.
- Almacenamiento local de selecciones.
- Diseño adaptable a móviles y escritorio.

## Estructura del proyecto
El código del prototipo está organizado en:
- CineMatch/css/
- CineMatch/js/components/
- CineMatch/js/data/
- CineMatch/js/pages/
- CineMatch/js/services/
- CineMatch/index.html
- CineMatch/README.md

El prototipo conserva sus datos y funcionalidades de demostración.
Todavía no está conectado a Supabase.

## Supabase

Proyecto:
- ID: hbqhnkuqryyfniltsgcz
- URL: https://hbqhnkuqryyfniltsgcz.supabase.co

Verificaciones realizadas:
- Tabla profiles.
- Relación profiles.id con auth.users.id mediante clave foránea.
- Políticas RLS de las tablas revisadas.
- Trigger on_auth_user_created en auth.users.
- Función public.handle_new_user() con SECURITY DEFINER.
- Creación automática de perfiles mediante el trigger.
- Vista public.public_profiles con security_invoker.
- Permisos de lectura y actualización limitados a las columnas previstas.
- Migración 002_public_profiles_view.sql respaldada en GitHub.
- Once comprobaciones de seguridad de la vista y sus permisos superadas.

Estado de autenticación:
- Configuración de correo revisada.
- No se ha completado una prueba real de registro e inicio de sesión.
- No se ha probado la recuperación de contraseña.
- El frontend todavía no está conectado a Supabase.

## Base de datos y respaldos
Archivos SQL disponibles:
- database/schema.sql
- database/policies.sql
- database/functions.sql
- database/migrations/002_public_profiles_view.sql

schema.sql y policies.sql son respaldos del estado consultado.
No deben ejecutarse a ciegas sobre la base de datos existente.
La migración 002 documenta la creación de la vista pública y sus permisos.

## Google
- Proyecto Google Cloud: cinematchweb.
- Número de proyecto: 486456527418.
- Consentimiento OAuth iniciado.
- Configuración de dominios y enlaces legales pendiente.
- Integración Google aplazada hasta completar los requisitos del dominio público.
- La primera opción de autenticación será correo y contraseña.

## Pendiente

1. Conectar Supabase al frontend.
2. Implementar registro e inicio de sesión por correo.
3. Probar creación automática de perfiles con usuarios reales.
4. Implementar recuperación de contraseña y probarla.
5. Conectar la edición y consulta de perfiles.
6. Integrar la API de películas TMDB.
7. Integrar noticias reales.
8. Implementar preferencias y Match real.
9. Completar la configuración de Google OAuth.
10. Crear documentos legales.
11. Realizar pruebas integrales.
12. Preparar y publicar la versión de prueba.

## Advertencias
- El prototipo todavía utiliza datos locales.
- Las pantallas de Match y Perfil no representan todavía un sistema conectado entre usuarios reales.
- La existencia de tablas, políticas y funciones en Supabase no significa que el frontend esté conectado.
- No marcar el registro, inicio de sesión ni recuperación como completados hasta realizar pruebas reales.

## Regla de mantenimiento
Actualizar este documento después de cada avance importante.
Mantener diferenciados los elementos verificados, implementados y pendientes.

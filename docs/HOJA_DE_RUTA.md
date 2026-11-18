# CineMatch — Hoja de Ruta Oficial

Última actualización: 18 de noviembre de 2026

## Objetivo
Desarrollar CineMatch, una plataforma para descubrir
películas, encontrar coincidencias y compartir gustos.

## FASE 1 — Preparación del proyecto
- [x] Crear proyecto desde ZIP nuevo.
- [x] Elegir estructura modular profesional.
- [x] Separar HTML, CSS y JavaScript.
- [x] Preparar entorno de trabajo en Termux.
- [x] Crear repositorio GitHub.
- [x] Conservar ZIP original de respaldo.

## FASE 2 — Supabase y base de datos
- [x] Crear proyecto Supabase.
- [x] Obtener URL del proyecto.
- [x] Preparar tabla profiles.
- [x] Relacionar profiles.id con auth.users.id.
- [x] Configurar políticas RLS iniciales.
- [x] Revisar las políticas RLS existentes.
- [x] Verificar trigger de creación automática de perfiles.
- [x] Verificar función handle_new_user().
- [x] Crear y verificar vista public_profiles.
- [x] Restringir permisos de acceso a las columnas previstas.
- [x] Respaldar migración 002_public_profiles_view.sql.
- [ ] Conectar el frontend con Supabase.
- [ ] Probar las operaciones de base de datos desde la aplicación.

## FASE 3 — Autenticación
- [x] Preparar autenticación por correo.
- [x] Crear proyecto Google Cloud cinematchweb.
- [ ] Conectar autenticación por correo al frontend.
- [ ] Probar registro de usuarios.
- [ ] Probar inicio y cierre de sesión.
- [ ] Probar creación automática de perfiles con registros reales.
- [ ] Implementar y probar recuperación de contraseña.
- [ ] Configurar Google OAuth.
- [ ] Obtener Client ID y Client Secret.
- [ ] Conectar Google con Supabase.
- [ ] Probar inicio de sesión con Google.

Nota: Google OAuth queda aplazado hasta tener
el dominio público y completar los requisitos legales.

## FASE 4 — Películas y contenido
- [x] Preparar catálogo de demostración.
- [x] Preparar buscador y filtros.
- [x] Preparar fichas de películas.
- [x] Preparar sección Descubrir.
- [x] Preparar estructura de noticias.
- [ ] Integrar API TMDB.
- [ ] Mostrar información y pósteres reales.
- [ ] Integrar noticias reales.
- [ ] Implementar recomendaciones dinámicas.

## FASE 5 — Perfiles y sistema Match
- [x] Preparar pantalla Match.
- [x] Preparar interés y descarte local.
- [x] Preparar estructura de perfiles en Supabase.
- [ ] Conectar consulta y edición de perfiles.
- [ ] Conectar preferencias con Supabase.
- [ ] Crear coincidencias reales.
- [ ] Implementar recomendaciones personalizadas.
- [ ] Probar coincidencias entre usuarios.

## FASE 6 — Documentación legal
- [ ] Redactar Política de Privacidad.
- [ ] Publicar página de Política de Privacidad.
- [ ] Redactar Condiciones del Servicio.
- [ ] Publicar página de Condiciones del Servicio.
- [ ] Incorporar enlaces en el registro.
- [ ] Incorporar enlaces en el pie de página.
- [ ] Añadir aceptación de condiciones.
- [ ] Explicar eliminación de cuentas y datos.
- [ ] Configurar enlaces en Google OAuth.

## FASE 7 — Pruebas
- [ ] Probar aplicación en Android.
- [ ] Corregir errores visuales.
- [ ] Verificar navegación y botones.
- [ ] Probar autenticación completa.
- [ ] Verificar seguridad de Supabase.
- [ ] Probar catálogo, noticias y Match.
- [ ] Optimizar velocidad y consumo de datos.

## FASE 8 — Publicación
- [ ] Publicar versión de prueba.
- [ ] Configurar dominio público.
- [ ] Configurar HTTPS.
- [ ] Configurar dominios autorizados.
- [ ] Finalizar Google OAuth.
- [ ] Realizar pruebas finales.
- [ ] Recopilar comentarios.

## FASE 9 — Funciones futuras
- [ ] Chat entre usuarios.
- [ ] Notificaciones.
- [ ] Perfiles avanzados.
- [ ] Funciones sociales.
- [ ] Aplicación móvil con Capacitor.
- [ ] Soporte para más idiomas.

## Orden de ejecución
1. Completar la documentación y los respaldos.
2. Conectar Supabase al frontend.
3. Implementar y probar autenticación por correo.
4. Conectar consulta y edición de perfiles.
5. Integrar películas y noticias.
6. Implementar preferencias y Match real.
7. Crear documentos legales.
8. Realizar pruebas integrales.
9. Configurar dominio y publicar versión de prueba.
10. Activar Google OAuth.

## Reglas del proyecto
- Priorizar herramientas gratuitas.
- Mantener desarrollo posible desde Android.
- No modificar el ZIP original de respaldo.
- Mantener estructura modular.
- Registrar los cambios importantes en GitHub.
- Actualizar esta hoja de ruta conforme avancemos.
- No marcar como completadas funciones que no hayan sido probadas.

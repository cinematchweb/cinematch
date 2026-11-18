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

## FASE 2 — Supabase
- [x] Crear proyecto Supabase.
- [x] Obtener URL del proyecto.
- [x] Preparar tabla profiles.
- [x] Relacionar profiles.id con auth.users.id.
- [x] Configurar políticas RLS iniciales.
- [x] Habilitar registro por correo.
- [ ] Verificar todas las políticas RLS.
- [ ] Verificar creación automática de perfiles.
- [ ] Probar registro e inicio de sesión.
- [ ] Probar recuperación de contraseña.

## FASE 3 — Autenticación
- [x] Preparar autenticación por correo.
- [x] Crear proyecto Google Cloud cinematchweb.
- [ ] Finalizar autenticación por correo.
- [ ] Configurar Google OAuth.
- [ ] Obtener Client ID y Client Secret.
- [ ] Conectar Google con Supabase.
- [ ] Probar inicio de sesión con Google.

Nota: Google OAuth queda aplazado hasta tener
el dominio público de CineMatch.

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

## FASE 5 — Sistema Match
- [x] Preparar pantalla Match.
- [x] Preparar interés y descarte local.
- [ ] Crear coincidencias reales.
- [ ] Conectar preferencias con Supabase.
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
- [ ] Probar autenticación.
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
1. Terminar Supabase.
2. Conectar autenticación por correo.
3. Conectar perfiles.
4. Integrar películas y noticias.
5. Implementar Match real.
6. Crear documentos legales.
7. Probar la aplicación.
8. Publicar versión de prueba.
9. Activar Google OAuth.

## Reglas del proyecto
- Priorizar herramientas gratuitas.
- Mantener desarrollo posible desde Android.
- No modificar el ZIP original de respaldo.
- Mantener estructura modular.
- Registrar los cambios importantes en GitHub.
- Actualizar esta hoja de ruta conforme avancemos.

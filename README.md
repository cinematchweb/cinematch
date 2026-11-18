# CineMatch

Plataforma en desarrollo para descubrir películas,
compartir gustos y encontrar coincidencias entre usuarios.

## Estado del proyecto

CineMatch se encuentra en desarrollo.

La versión actual contiene un prototipo modular V1.1
con datos locales de demostración.

La conexión del frontend con Supabase y las funciones
reales de autenticación todavía están pendientes.

Consulta:
- [Estado actual](docs/ESTADO_ACTUAL.md)
- [Hoja de ruta](docs/HOJA_DE_RUTA.md)
- [Decisiones técnicas](docs/DECISIONES_TECNICAS.md)

## Estructura del repositorio

- `CineMatch/`: código del prototipo web.
- `database/`: respaldos SQL y migraciones.
- `docs/`: documentación técnica y planificación.
- `CineMatch_Prototipo_Modular_V1.1.zip`: respaldo del prototipo original.

## Tecnologías y herramientas

- HTML
- CSS
- JavaScript
- Supabase
- PostgreSQL
- Git y GitHub
- Android y Termux

## Base de datos

El proyecto Supabase contiene estructuras para perfiles,
películas, preferencias y coincidencias.

Las políticas RLS, la función de creación automática
de perfiles y la vista pública de perfiles han sido
revisadas y documentadas.

Los archivos SQL son respaldos y documentación.
No deben ejecutarse indiscriminadamente sobre la
base de datos existente.

## Desarrollo

El proyecto se mantiene desde Android utilizando Termux.
Se priorizan herramientas gratuitas y una arquitectura
modular.

Para conocer las funciones disponibles en el prototipo,
consulta `CineMatch/README.md`.

## Seguridad

- No subir claves privadas ni archivos `.env`.
- No incluir contraseñas ni secretos OAuth en el repositorio.
- Revisar los permisos y las políticas RLS antes de publicar.
- Mantener actualizados los respaldos y la documentación.

## Estado de publicación

CineMatch todavía no está preparado para producción.
La autenticación real, las integraciones externas,
las pruebas integrales y la publicación siguen pendientes.

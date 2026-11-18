# Base de datos — CineMatch

## Plataforma
Supabase / PostgreSQL

## Proyecto
hbqhnkuqryyfniltsgcz

## Tabla profiles
Tabla de perfiles de usuarios.

## Relación documentada
profiles.id -> auth.users.id

Restricción:
FOREIGN KEY (id) REFERENCES auth.users(id)
ON DELETE CASCADE

## Seguridad
Se han trabajado políticas RLS para profiles.

Se detectó que la política:
Authenticated users can view profiles
ya existía al intentar crearla nuevamente.

## Pendiente de verificación
- Consultar todas las columnas de profiles.
- Consultar todas las restricciones.
- Consultar todas las políticas RLS.
- Verificar permisos SELECT.
- Verificar permisos INSERT.
- Verificar permisos UPDATE.
- Verificar creación automática de perfiles.
- Probar eliminación de usuarios.

## Respaldos SQL
Guardar en database/migrations/ los scripts
reales y comprobados de creación y modificación.

No inventar migraciones ni asumir que una consulta
ejecutada correctamente representa toda la configuración.

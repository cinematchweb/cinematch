# Base de datos — CineMatch

## Plataforma
Supabase / PostgreSQL

## Proyecto
hbqhnkuqryyfniltsgcz

## Tablas existentes
- profiles
- movies
- user_preferences
- matches

Las cuatro tablas tienen RLS habilitado.

## Tabla profiles

Tabla de perfiles de usuarios.

Relación:
profiles.id -> auth.users.id

Restricción:
FOREIGN KEY (id) REFERENCES auth.users(id)
ON DELETE CASCADE

Columnas:
- id
- username
- display_name
- avatar_url
- created_at

## Automatización de perfiles

Verificado directamente en Supabase:

- Trigger: on_auth_user_created
- Tabla: auth.users
- Evento: INSERT
- Momento: AFTER
- Función: public.handle_new_user()
- Seguridad de la función: SECURITY DEFINER
- Propietario: postgres
- search_path vacío

El trigger crea automáticamente el perfil correspondiente
en public.profiles al registrar un usuario.

No se necesita crear otra migración para este trigger.

## Descubrimiento de perfiles

Migración aplicada correctamente:
create_public_profiles_view

Archivo local:
database/migrations/002_public_profiles_view.sql

Vista creada:
public.public_profiles

Configuración:
- security_invoker = true
- Columnas expuestas: id, username, display_name, avatar_url
- Acceso SELECT concedido a authenticated.
- Acceso SELECT denegado a anon.

La política RLS de profiles permite que usuarios autenticados
consulten perfiles para descubrimiento y Match.

## Permisos de profiles

Verificados directamente en Supabase:

- authenticated puede leer las cuatro columnas públicas.
- authenticated puede actualizar username, display_name y avatar_url.
- authenticated no puede modificar id ni created_at.
- authenticated no tiene permiso de INSERT directo.
- anon no tiene permisos generales sobre profiles.

La creación automática de perfiles se mantiene mediante
handle_new_user(), que utiliza SECURITY DEFINER.

## Políticas RLS verificadas

### profiles
- SELECT: usuarios autenticados pueden consultar perfiles.
- INSERT: política de creación del propio perfil.
- UPDATE: cada usuario puede actualizar su propio perfil.

La política INSERT permanece definida, pero los usuarios
autenticados no tienen permiso SQL directo de INSERT.

### matches
- SELECT: cada usuario consulta sus propios matches.
- INSERT: el usuario debe ser user_a.
- UPDATE: el destinatario puede responder a matches pendientes.

### user_preferences
- SELECT: cada usuario consulta sus preferencias.
- INSERT: cada usuario crea sus propias preferencias.
- UPDATE: cada usuario actualiza sus propias preferencias.

### movies
- SELECT: lectura pública para anon y authenticated.

## Verificaciones de seguridad

Después de aplicar create_public_profiles_view se comprobaron
satisfactoriamente:

- Existencia de la vista.
- security_invoker habilitado.
- Permisos de lectura de la vista.
- Restricción de acceso para anon.
- Permisos por columna.
- Protección de id y created_at.
- Ausencia de INSERT directo para authenticated.
- RLS habilitado.
- SECURITY DEFINER de la función automática.

## Pendiente
- Probar registro real de usuarios.
- Verificar creación automática de perfiles mediante registro.
- Probar actualización de perfiles.
- Probar descubrimiento de perfiles entre usuarios.
- Probar creación y respuesta de matches.
- Probar preferencias de usuario.
- Probar eliminación de usuarios y eliminación en cascada.

## Respaldos SQL

Guardar en database/migrations/ los scripts reales
y comprobados de creación y modificación.

No inventar migraciones ni asumir que una consulta
ejecutada correctamente representa toda la configuración.

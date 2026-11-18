# Autenticación — CineMatch

## Proveedor principal
Supabase Auth.

## Primera etapa
Autenticación mediante correo electrónico y contraseña.

## Estado de implementación

Pendiente:
- Integrar cliente Supabase en JavaScript.
- Implementar registro.
- Implementar inicio de sesión.
- Implementar cierre de sesión.
- Implementar recuperación de contraseña.
- Configurar redirecciones.
- Gestionar sesiones.
- Conectar frontend con perfiles.
- Probar desde dispositivos móviles.

## Relación entre usuarios y perfiles

Tabla de autenticación:
auth.users

Tabla de perfiles:
public.profiles

Relación:
profiles.id -> auth.users.id

La relación utiliza ON DELETE CASCADE.

## Creación automática de perfiles

Verificado directamente en Supabase:

- Trigger: on_auth_user_created
- Evento: INSERT sobre auth.users
- Momento: AFTER
- Función: public.handle_new_user()

La función utiliza SECURITY DEFINER y pertenece a postgres.
Su search_path está vacío.

Crea automáticamente el perfil al registrar un usuario.

## Descubrimiento de perfiles

Vista:
public.public_profiles

Migración aplicada:
create_public_profiles_view

Los usuarios autenticados pueden consultar:
- id
- username
- display_name
- avatar_url

No se expone created_at mediante esta vista.

La vista utiliza security_invoker = true y respeta
los permisos y políticas RLS del usuario que consulta.

## Seguridad

- RLS habilitado en las tablas.
- Cada usuario puede actualizar únicamente su propio perfil.
- La actualización de perfiles está limitada a username,
  display_name y avatar_url.
- No se permite INSERT directo de perfiles a authenticated.
- La creación automática se realiza mediante el trigger.
- No guardar Client Secret ni tokens privados
  en archivos del repositorio.

## Google OAuth

Proyecto Google Cloud: cinematchweb.

Estado:
- Proyecto creado.
- Pantalla de consentimiento iniciada.
- Configuración de OAuth incompleta.
- Dominio público pendiente.
- Política de privacidad pendiente.
- Condiciones del servicio pendientes.

Decisión:
Aplazar Google OAuth hasta tener publicada
la dirección definitiva de CineMatch.

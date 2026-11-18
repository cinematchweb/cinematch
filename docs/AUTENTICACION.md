# Autenticación — CineMatch

## Proveedor principal
Supabase Auth.

## Primera etapa
Autenticación mediante correo electrónico y contraseña.

## Pendiente
- Integrar cliente Supabase en JavaScript.
- Implementar registro.
- Implementar inicio de sesión.
- Implementar cierre de sesión.
- Implementar recuperación de contraseña.
- Configurar redirecciones.
- Gestionar sesiones.
- Conectar perfiles con auth.users.
- Probar desde dispositivos móviles.

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

## Seguridad
No guardar Client Secret ni tokens privados
en archivos del repositorio.

## Verificación del trigger de registro

Verificado directamente en Supabase:

- Tabla: `auth.users`
- Evento: `INSERT`
- Momento: `AFTER`
- Trigger: `on_auth_user_created`
- Función ejecutada: `public.handle_new_user()`

El trigger ya existe y ejecuta la función al registrar un usuario.
No se necesita crear una migración adicional para este trigger.

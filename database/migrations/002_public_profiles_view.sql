-- CineMatch
-- Vista publica de perfiles para descubrimiento y Match.
-- Revisar antes de ejecutar en Supabase.

BEGIN;

CREATE OR REPLACE VIEW public.public_profiles
WITH (security_invoker = true)
AS
SELECT
    id,
    username,
    display_name,
    avatar_url
FROM public.profiles;

-- Retirar permisos generales.
REVOKE ALL PRIVILEGES ON TABLE public.profiles
FROM PUBLIC, anon, authenticated;

-- Lectura limitada a las columnas publicas.
GRANT SELECT (id, username, display_name, avatar_url)
ON TABLE public.profiles
TO authenticated;

-- Actualizacion limitada a los campos editables.
GRANT UPDATE (username, display_name, avatar_url)
ON TABLE public.profiles
TO authenticated;

-- Acceso a la vista publica.
REVOKE ALL ON public.public_profiles FROM PUBLIC, anon;
GRANT SELECT ON public.public_profiles TO authenticated;

COMMIT;

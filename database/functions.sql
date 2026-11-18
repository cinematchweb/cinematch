-- CineMatch: función de creación automática de perfiles.
-- Verificada en Supabase el 18-11-2026.
-- El trigger on_auth_user_created la ejecuta AFTER INSERT
-- sobre auth.users.
-- La función utiliza SECURITY DEFINER y search_path vacío.
-- Este archivo documenta la función existente; revisar antes
-- de ejecutarlo en una base de datos.

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $function$
BEGIN
    INSERT INTO public.profiles
        (id, display_name, avatar_url)
    VALUES (
        NEW.id,
        COALESCE(
            NEW.raw_user_meta_data ->> 'display_name',
            NEW.raw_user_meta_data ->> 'full_name'
        ),
        NEW.raw_user_meta_data ->> 'avatar_url'
    )
    ON CONFLICT (id) DO NOTHING;

    RETURN NEW;
END;
$function$;

-- CineMatch: esquema público de Supabase
-- Snapshot consultado el 18-11-2026.
-- No ejecutar sobre producción sin revisar primero.

CREATE TABLE public.profiles (
    id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    username text UNIQUE,
    display_name text,
    avatar_url text,
    created_at timestamptz DEFAULT now()
);

CREATE TABLE public.movies (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    tmdb_id integer UNIQUE,
    title text NOT NULL,
    overview text,
    poster_path text,
    release_date date,
    genres text[],
    created_at timestamptz DEFAULT now()
);

CREATE TABLE public.user_preferences (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL UNIQUE REFERENCES public.profiles(id) ON DELETE CASCADE,
    favorite_genres text[] DEFAULT '{}'::text[],
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

CREATE TABLE public.matches (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_a uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    user_b uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    status text DEFAULT 'pending',
    created_at timestamptz DEFAULT now(),
    CONSTRAINT matches_check CHECK (user_a <> user_b),
    CONSTRAINT matches_status_check
        CHECK (status IN ('pending', 'matched', 'rejected')),
    CONSTRAINT matches_user_a_user_b_key UNIQUE (user_a, user_b)
);

CREATE INDEX idx_matches_user_a ON public.matches(user_a);
CREATE INDEX idx_matches_user_b ON public.matches(user_b);
CREATE INDEX idx_movies_tmdb ON public.movies(tmdb_id);
CREATE INDEX idx_preferences_user ON public.user_preferences(user_id);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.movies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.matches ENABLE ROW LEVEL SECURITY;

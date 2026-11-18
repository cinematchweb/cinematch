-- CineMatch: políticas RLS consultadas en Supabase
-- Snapshot del 18-11-2026.
-- Requiere que existan previamente las cuatro tablas.

CREATE POLICY "Authenticated users can view profiles"
ON public.profiles FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Users can create own profile"
ON public.profiles FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile"
ON public.profiles FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

CREATE POLICY "Movies are publicly readable"
ON public.movies FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Users can view own preferences"
ON public.user_preferences FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can create own preferences"
ON public.user_preferences FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own preferences"
ON public.user_preferences FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their matches"
ON public.matches FOR SELECT
TO authenticated
USING (auth.uid() = user_a OR auth.uid() = user_b);

CREATE POLICY "Users can create matches"
ON public.matches FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_a);

CREATE POLICY "Recipient can respond to pending matches"
ON public.matches FOR UPDATE
TO authenticated
USING (
    (SELECT auth.uid()) = user_b
    AND status = 'pending'
)
WITH CHECK (
    (SELECT auth.uid()) = user_b
    AND status IN ('matched', 'rejected')
);

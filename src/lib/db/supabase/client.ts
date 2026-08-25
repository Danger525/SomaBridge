import { createBrowserClient } from '@supabase/ssr';

export function createSupabaseBrowser() {
  const url = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  return createBrowserClient(url, key);
}

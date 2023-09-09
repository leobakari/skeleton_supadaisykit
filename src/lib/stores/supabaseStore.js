// Store that contains the current supabase client. Updated by the Layout.
import { writable } from 'svelte/store';

export const supabaseStore = writable();

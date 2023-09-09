// Store that contains the session information. is updated by the layout.
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import type { Session } from '@supabase/supabase-js';

export const sessionStore: Writable<Session | null> = writable(null);

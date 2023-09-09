<script lang="ts">
  import "../app.postcss";
  import Navbar from "$lib/components/navbar.svelte";
  import { invalidate } from '$app/navigation';
  import { onMount } from 'svelte';
  import type { LayoutData } from './$types';
  import { sessionStore } from '$lib/stores/sessionStore';
  import { supabaseStore } from "$lib/stores/supabaseStore";
  $: ({ supabase, session } = data);

  export let data: LayoutData; 

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      async(event, _session) => {
      await new Promise((resolve) => setTimeout(resolve, 5));
      sessionStore.set(_session)
      supabaseStore.set(supabase)
      if (_session?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth');
      }
    });
    return () => subscription.unsubscribe();
  });
</script>

<Navbar/>
<slot />

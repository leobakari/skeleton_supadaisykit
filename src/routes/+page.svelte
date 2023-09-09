<script>
  import { sessionStore } from '$lib/stores/sessionStore';
  import { supabaseStore } from '$lib/stores/supabaseStore.js';

  export let data
  let {session, supabase } = data;

  // handles signOut
    const handleSignOut2 = async () => {
    await $supabaseStore.auth.signOut()
    console.log(session)
  }
</script>


Current User: {$sessionStore?.user.email}
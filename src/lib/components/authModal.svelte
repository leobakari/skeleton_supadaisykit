<!-- Modal
    - Combi of daisyui components (Modal close with x & close on backdrop) 
    - Design of Modal from Supabase Auth UI-->

<script lang="ts">
	import { Auth } from '@supabase/auth-ui-svelte'
	import { ThemeSupa } from '@supabase/auth-ui-shared'
    import { sessionStore } from '$lib/stores/sessionStore'
    import { supabaseStore } from '$lib/stores/supabaseStore'

    const handleSignOut = async () => {
    await $supabaseStore.auth.signOut()
    }
</script>

{#if $sessionStore}
    <button class="logoutBtn btn btn-accent" on:click={handleSignOut}>
        Logout
    </button>
{:else}
    <div class="authModal">
        <button 
        class="btn btn-accent" 
        onclick="my_modal_2.showModal()">
            Sign up
        </button>
        <dialog id="my_modal_2" class="modal">
        <div class="modal-box flex flex-col justify-center items-center">
            <form method="dialog">
                <button 
                class="btn btn-sm btn-circle btn-ghost 
                absolute right-2 top-2">
                    ✕
                </button>
            </form>
            <h2 class="">Register or Login now!</h2>
            <div class="row flex-center flex">
                <div class="col-6 form-widget">
                    <Auth
                        supabaseClient={$supabaseStore}
                        providers={["google","github", "discord"]}
                        view="magic_link"
                        redirectTo={`/auth/callback`}
                        showLinks={false}
                        appearance={{ 
                            theme: ThemeSupa, 
                            style: { input: 'color: #657B6E' } }}
                    />
                </div>
            </div>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
        </dialog>
    </div>
{/if}
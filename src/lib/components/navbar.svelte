<!--
  Navbar - utilized authModal. (allows login / logout)
  Manages routing ont he website
-->
<script>
  import AuthModal from "./authModal.svelte";
</script>

<div class="navbar bg-base-100 shadow-md">
    <div class="navbar-start">
       <!--Dropdown Nav Elements on the Phone / Mobile--> 
      <div class="dropdown">
        <button class="btn btn-ghost lg:hidden">
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-5 w-5" fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"><path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
        </button>
        <ul class="menu menu-sm dropdown-content 
        mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="/">home</a></li>
          <li><a href="/social">social</a></li>
          <li><a href="/about-us">about us</a></li>
        </ul>
      </div>
    <!--Title of the website-->
      <a href="/" class="btn btn-ghost normal-case text-xl">antdone</a>
     
      <!--Navbar if on Browser-->
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a href="/">home</a></li>
        <li><a href="/social">social</a></li>
        <li><a href="/about-us">about us</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <AuthModal/>
    </div>
  </div>
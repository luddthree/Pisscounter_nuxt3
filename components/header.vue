<template>
  <div>
    <nav
      class="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg  md:flex-wrap md:justify-start"
      data-te-navbar-ref>
      <div class="flex w-full flex-wrap items-center justify-between px-3">
        <div class="flex items-center">
          <!-- Hamburger menu button -->
          <button onclick="location.href = '/';" class="border-0 text-xl " type="button" data-te-collapse-init
            data-te-target="#navbarSupportedContentY" aria-controls="navbarSupportedContentY" aria-expanded="false"
            aria-label="Toggle navigation">
            <!-- Hamburger menu icon -->


            <img src="logo.jpg" width="40" height="40">

          </button>
        </div>
        <button type="button" onclick="location.href = '/enternew';"
          class="bg-purple-500 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded right-2 absolute">Sign
          up</button>
        <div class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
          <a class="block transition duration-150 ease-in-out right-28 top-4 absolute font-bold hover:text-neutral-900"
            href="/logon" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Sign in</a>
        </div>
        <p class="right-44 absolute">|</p>
        <div class="mb-4 lg:mb-0 lg:pr-2 font-bold" data-te-nav-item-ref>
          <a class="block transition duration-150 ease-in-out right-48 top-4 absolute hover:text-neutral-900"
            href="/about" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">About</a>
        </div>
        <p class="right-64 absolute">|</p>
        <div class="mb-4 lg:mb-0 lg:pr-2 font-bold" data-te-nav-item-ref>
          <a class="block transition duration-150 ease-in-out right-72 top-4 absolute hover:text-neutral-900"
            href="/map" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">PissMap</a>
        </div>
      </div>
    </nav>
    <br>
  </div>
</template>
<template>
  <header
    class="
      mt-6
      mx-8
      shadow-md
      rounded-md
      flex
      justify-between
      px-8
      items-center
      bg-white
      overflow-hidden
    "
  >
    <img src="/logo.png" alt="logo" class="w-16 animation-image" />
    <nav>
      <ul class="flex items-center space-x-8">
        <li>
          <RouterLink
            to="/"
            class="block font-semibold rounded px-4 py-1 text-gray-900"
            >Accueil</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/chats"
            class="block font-semibold rounded px-4 py-1 text-gray-900"
            >Nos chats</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/add" class="btn primary">Ajouter un chat</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.router-link-exact-active {
  @apply bg-teal-800 text-white duration-200;
}
.router-link-exact-active:hover {
  @apply bg-teal-900;
}
</style>
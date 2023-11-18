<template>
  <div>
    <nav>
      <RouterLink :to="{name: 'pineapple'}">Pineapple</RouterLink>
    </nav>
    <h1>home page</h1>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  border: 1px solid slategray;
}
</style>
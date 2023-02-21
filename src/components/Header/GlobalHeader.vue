<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <header class="container">
    <RouterLink to="/">
      <img
        alt="Vue logo"
        class="logo"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fc4e765d-760d-45dc-9f31-58d1bd0eb872/dc4z89w-641684e2-15ca-497b-b5ca-c331e7e055b6.png/v1/fill/w_1024,h_1024,strp/rick_and_morty_portal_1___free_download_by_loaf_of_muffin_dc4z89w-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2ZjNGU3NjVkLTc2MGQtNDVkYy05ZjMxLTU4ZDFiZDBlYjg3MlwvZGM0ejg5dy02NDE2ODRlMi0xNWNhLTQ5N2ItYjVjYS1jMzMxZTdlMDU1YjYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5PeSWIoX1cFhDXi8nbPstLGpqjyYC0D9r5rBPrjKbh0"
        width="75"
        height="75"
      />
    </RouterLink>
    <nav class="navigation">
      <RouterLink class="link" to="/characters">Characters</RouterLink>
      <RouterLink class="link" to="/planets">Planets</RouterLink>
      <RouterLink class="link" to="/episodes">Episodes</RouterLink>
    </nav>
  </header>
</template>
<style scoped>
.container {
  padding: 10px;
  display: flex;
  flex-direction: row;
}
.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.link {
  font-size: 24px;
  padding: 0 14px;
}
</style>

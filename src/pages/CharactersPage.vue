<script lang="ts" setup>
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import type { Character } from "../types/Character";

const allCharacters: Ref<Character[]> = ref([]);

async function fetchCharacters(): Promise<void> {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const parsedResponse = await res.json();
    allCharacters.value = parsedResponse.results;
  } catch (e) {
    alert(e);
  }
}

onMounted(() => {
  fetchCharacters();
});
</script>

<template>
  <div class="characters">
    <h1>Characters</h1>
    <div v-for="character in allCharacters" :key="character.id">
      <img :src="character.image" alt="Character Image" />
      <div>
        <p>
          {{ character.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .characters {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
}
</style>

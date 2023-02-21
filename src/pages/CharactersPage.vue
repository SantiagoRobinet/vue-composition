<script lang="ts" setup>
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import type { Character } from "../types/Character";
import CharacterCard from "@/components/Character/CharacterCard.vue";

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
    <div
      class="grid-item"
      v-for="character in allCharacters"
      :key="character.id"
    >
      <CharacterCard
        :id="character.id"
        :name="character.name"
        :image="character.image"
        :status="character.status"
        :species="character.species"
        :origin="character.origin"
        :location="character.location"
      />
    </div>
  </div>
</template>

<style scoped>
.characters {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 16px;
}
.grid-item {
  padding: 16px;
}
</style>

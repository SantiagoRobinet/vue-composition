<script lang="ts" setup>
import CharacterCard from "@/components/Character/CharacterCard.vue";
import { useCharacters } from "@/composables/useCharacters";

const { charactersList, nextPage, previousPage } = useCharacters();
</script>

<template>
  <div class="characters">
    <div
      class="grid-item"
      v-for="character in charactersList"
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
  <div>
    <button @click="previousPage">Previous</button>
    <button @click="nextPage">Next</button>
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

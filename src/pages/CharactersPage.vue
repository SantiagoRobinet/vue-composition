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
  <div class="button__container">
    <button class="button" @click="previousPage">Previous</button>
    <button class="button" @click="nextPage">Next</button>
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

.button__container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
}
.button {
  background: none;
  color: inherit;
  border: none;
  padding: 4px;
  margin: 0 10px;
  font-size: 20px;
  color: rgb(0, 255, 30);
}
.button:hover {
  box-shadow: 0 0 35px 3px rgb(0, 255, 30), 0 0 50px 5px rgb(0, 255, 162);
}
</style>

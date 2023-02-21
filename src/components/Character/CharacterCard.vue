<script lang="ts" setup>
interface CharacterCardProps {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
}

const props = defineProps<CharacterCardProps>();
</script>

<template>
  <div class="card__container">
    <img
      :class="[props.status?.toLocaleLowerCase(), 'image']"
      :src="props.image"
      alt="Character Image"
    />
    <div class="character-info__container">
      <span class="name">
        {{ props.name }}
      </span>
      <span class="status"> Status: {{ props.status }} </span>
      <span class="specie"> Specie: {{ props.species }} </span>
      <span class="origin"> Origin: {{ props.origin.name }} </span>
      <span class="location"> Location: {{ props.location.name }} </span>
    </div>
  </div>
</template>

<style scoped>
.card__container {
  background-color: tomato;
  display: flex;
  flex-direction: row;
  border-bottom-left-radius: 18%;
  border-top-left-radius: 44%;
}
.image {
  border-radius: 50%;
  height: 120px;
}
.character-info__container {
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 100%;
  padding-right: 6px;
}
.name {
  font-size: 22px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dead {
  box-shadow: 0 0 35px 2px rgb(255, 0, 0), 0 0 10px 3px rgb(255, 0, 119);
}
.alive {
  box-shadow: 0 0 35px 2px rgb(0, 255, 30), 0 0 10px 3px rgb(0, 255, 162);
}

.unknown {
  box-shadow: 0 0 35px 2px rgb(0, 179, 255),
    0 0 10px 3px rgba(0, 208, 255, 0.727);
}

.origin {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.location {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

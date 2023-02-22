import { ref, onMounted, watch } from "vue";
import type { Ref } from "vue";
import type { Character } from "../types/Character";

export function useCharacters() {
  const charactersList: Ref<Character[]> = ref([]);
  const page: Ref<number> = ref(1);
  const maxPage: Ref<number> = ref(1);

  async function fetchCharacters(): Promise<void> {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page.value}`
      );
      const parsedResponse = await res.json();
      charactersList.value = parsedResponse.results;
      maxPage.value = parsedResponse.info.pages;
    } catch (e) {
      alert(e);
    }
  }

  onMounted(() => {
    fetchCharacters();
  });

  const nextPage = () => {
    if (page.value === maxPage.value) {
      return;
    }
    page.value++;
  };

  const previousPage = () => {
    if (page.value === 1) {
      return;
    }
    page.value--;
  };

  watch(page, fetchCharacters);

  return {
    charactersList,
    nextPage,
    previousPage,
  };
}

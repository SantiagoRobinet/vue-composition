import { mount } from "@vue/test-utils";
import CharactersPage from "./CharactersPage.vue";

describe("CharactersPage", () => {
  const wrapper = mount(CharactersPage);
  it("should render container", () => {
    console.log(wrapper.html());
  });
});

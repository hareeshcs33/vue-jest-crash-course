import { mount } from "@vue/test-utils";
import CounterComponent from "@/components/CounterComponent.vue";

describe("CounterComponent.vue", () => {
  it("increment counter value on click", async () => {
    const wrapper = mount(CounterComponent);
    const button = wrapper.find("button");
    const counterText = wrapper.find("p");

    expect(counterText.text()).toContain("Total clicks: 0");

    await button.trigger("click");

    expect(counterText.text()).toContain("Total clicks: 1");
  });
});

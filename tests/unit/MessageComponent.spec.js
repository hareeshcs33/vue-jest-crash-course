import { mount } from "@vue/test-utils";
import MessageComponent from "@/components/MessageComponent.vue";

describe("MessageComponent.vue", () => {
  it("display message", async () => {
    const wrapper = mount(MessageComponent, {
      propsData: {
        msg: "Hello world",
      },
    });

    expect(wrapper.find("p").exists()).toBeTruthy();
    expect(wrapper.text()).toMatch("Hello world");

    await wrapper.setData({
      show: false,
    });

    expect(wrapper.text()).not.toMatch("Hello world");
    expect(wrapper.find("p").exists()).toBeFalsy();
  });
});

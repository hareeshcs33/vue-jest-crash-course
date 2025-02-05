import { mount } from "@vue/test-utils";
import TodoItem from "@/components/todo-item.vue";

describe("todo-item.vue", () => {
  it("render todo-item", async () => {
    const wrapper = mount(TodoItem, {
      props: {
        todos: [
          {
            title: "Todo One",
            id: 1,
            completed: false,
          },
        ],
      },
    });
    expect(wrapper.findAll('[data-test="todo-item"]')).toHaveLength(1);

    await wrapper.get('[data-test="new-todo"]').setValue("New Todo");
    await wrapper.get('[data-test="form"]').trigger("submit");

    expect(wrapper.findAll('[data-test="todo-item"]')).toHaveLength(2);
  });
});

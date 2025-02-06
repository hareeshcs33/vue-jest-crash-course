import { mount } from "@vue/test-utils";
import TodoItem from "@/components/todo-item.vue";

describe("todo-item.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(TodoItem, {
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
  });
  it("render todo-item", async () => {
    expect(wrapper.findAll('[data-test="todo-item"]')).toHaveLength(1);

    await wrapper.get('[data-test="new-todo"]').setValue("New Todo");
    await wrapper.get('[data-test="form"]').trigger("submit");

    expect(wrapper.findAll('[data-test="todo-item"]')).toHaveLength(2);
  });

  it("render todo-item is completed", async () => {
    await wrapper.get('[data-test="todo-completed"]').setValue(true);
    expect(wrapper.get('[data-test="todo-item"]').classes()).toContain(
      "completed"
    );
  });
});

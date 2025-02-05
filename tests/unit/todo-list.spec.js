import { mount } from "@vue/test-utils";
import TodoList from "@/components/todo-list.vue";

describe("todo-item.vue", () => {
  it("todo list check", () => {
    const wrapper = mount(TodoList);
    const todoHeading = wrapper.get('[data-test="todo-heading"]');
    expect(todoHeading.text()).toContain("Todo List");
  });
});

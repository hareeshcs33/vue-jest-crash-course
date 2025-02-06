import { shallowMount } from "@vue/test-utils";
import FruitList from "@/components/FruitList.vue";

describe("FruitList component test", () => {
  // Testing a component with data
  it("tests data attributes", () => {
    const wrapper = shallowMount(FruitList);
    expect(wrapper.vm.fruits).toEqual(["Apple", "Banana", "Orange"]);
  });

  //   Testing a component with computed properties
  it("return total number of fruits", () => {
    const wrapper = shallowMount(FruitList);
    expect(wrapper.vm.numFruits).toBe(3);
  });

  //   Testing a component with methods
  it("tests addFruit method", () => {
    const wrapper = shallowMount(FruitList);

    const vm = wrapper.vm;
    expect(vm.fruits.length).toBe(3);

    // add mango to the fruit list
    vm.addFruit("Mango");

    expect(vm.fruits.length).toBe(4);
  });

  //   Testing what the component will render
  it("display a list of fruits", () => {
    const wrapper = shallowMount(FruitList);
    const fruits = wrapper.findAll('[data-test="fruit"]');
    expect(fruits.at(0).text()).toBe("Apple");
    expect(fruits.at(1).text()).toBe("Banana");
    expect(fruits.at(2).text()).toBe("Orange");
  });

  it("display the number of fruits", () => {
    const wrapper = shallowMount(FruitList);
    const numFruits = wrapper.find('[data-test="num-fruit"]');
    expect(numFruits.text()).toBe("Number of fruits: 3");
  });
});

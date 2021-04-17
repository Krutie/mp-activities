<template>
  <div class="form border-bottom p-y-5">
    <div>Add New Item</div>
    
    <!-- Drop-down -->
    <select v-model="formData.options">
      <option disabled selected value=""> Please select type</option>
      <option v-for="(option, index) in options" :key="index" :value="option">
        {{ option.name }}
      </option>
    </select>
    
    <!-- Input box -->
    <input
      type="text"
      placeholder="Enter your topping"
      v-model="formData.topping"
      required
    />

    <!-- Submit button -->
    <button @click="addNewItem" :disabled="!isValid" :class="{ noHover: !isValid }">ADD</button>
  </div>
</template>
<script>
import { reactive, computed } from "vue";

export default {
  emits: ["added"],
  setup(_, { emit }) {
    const options = [
      {
        id: 1,
        type: "donut",
        name: "Cake",
      },
      {
        id: 2,
        type: "donut",
        name: "Raised",
      },
      {
        id: 3,
        type: "donut",
        name: "Old Fashioned",
      },
      {
        id: 4,
        type: "bar",
        name: "Bar",
      },
      {
        id: 5,
        type: "twist",
        name: "Twist",
      },
      {
        id: 6,
        type: "filled",
        name: "Filled",
      },
    ];

    const formData = reactive({
      options: '',
      topping: '',
    });

    const isValid = computed(() => {
      return formData.options && formData.topping ? true : false;
    });

    function addNewItem() {
      if (isValid.value) {
        let newItem = { topping: formData.topping, ...formData.options };
        emit("added", newItem);
        reset();
      }
    }

    function reset() {
      formData.options = '';
      formData.topping = '';
    }

    return {
      formData,
      options,
      addNewItem,
      isValid,
    };
  },
};
</script>
<style>
@media only screen 
  and (orientation: portrait) { 
  .form {
    display: flex;
    flex-direction: column;
  }
}
</style>

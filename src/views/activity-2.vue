<template>
  <div>
    <h1>Activity 2: Get value by path</h1>
    <input v-model="path" placeholder="address.office.suburb" />
    <button v-on:click="checkPath(path, megaportObj)">Search</button>
    <div>
      <span>Path: {{ path }} = </span>
      <span :class="[inValid ? 'error' : 'success']"> {{ result }} </span>
    </div>
    <pre> Reference object: {{ megaportObj }} </pre>
  </div>
</template>
<script>
import { ref } from "vue";
import useValueFinder from "../use/valueFinder";

export default {
  setup() {
    const megaportObj = {
      name: "Megaport",
      address: {
        office: {
          unit: "Level 3",
          street: "825 Ann Street",
          suburb: "Fortitude Valley",
          city: "Brisbane",
          state: "Queensland",
          postcode: 4006,
        },
      },
      industry: {
        type: "Internet and telecommunications",
        asxListed: true,
      },
    };

    const path = ref("");

    const { result, checkPath, inValid } = useValueFinder();

    return {
      megaportObj,
      path,
      result,
      checkPath,
      inValid,
    };
  },
};
</script>
<style>
.success {
  color: green;
}
.error {
  color: tomato;
}
</style>

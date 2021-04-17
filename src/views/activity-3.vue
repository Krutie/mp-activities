<template>
  <div>
    <h1>Activity 3: Reusable fetch</h1>
    <span> Please see browser console for the results. </span>
  </div>
</template>

<script>
import { onMounted } from "vue";

import dataProvider from "../use/dataProvider";

export default {
  setup() {
    const { myFetch } = dataProvider();
    onMounted(async () => {
      const url = "https://api.megaport.com/v2/locations";

      // without custom headers
      // const response = await myFetch(url);

      // with custom headers
      const response = await myFetch(url, {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      });
      console.log('Activity III - Reusable fetch result 👇')
      console.log(response);
    });
  },
};
</script>


<template>
  <span>
    <span v-if="sortDirection == 'desc'"> ⬇ </span>
    <span v-else> ⬆ </span>
  </span>
</template>
<script>
export default {
  props: {
    sortDirection: {
      type: String,
      default: "asc",
    },
  },
};
</script>
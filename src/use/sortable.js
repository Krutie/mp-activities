// Activity 1: Data sorting and filtering

import { computed } from "vue";

export default function sortable(items, searchQuery, currentSortKey, currentSortDirection) {

  function setSortKey(sortKey) {
    if (sortKey === currentSortKey.value) {
      currentSortDirection.value =
        currentSortDirection.value === "asc" ? "desc" : "asc";
    }
    currentSortKey.value = sortKey;
  }

  function addItem(payload) {
    return items.value.push(payload);
  }

  const searchedItems = computed(() => {
    const regx = new RegExp(searchQuery.value, "i");
    return items.value
      .slice()
      .sort((a, b) => {
        let modifier = 1;
        if (currentSortDirection.value === "desc") modifier = -1;
        if (a[currentSortKey.value] < b[currentSortKey.value])
          return -1 * modifier;
        if (a[currentSortKey.value] > b[currentSortKey.value])
          return 1 * modifier;
        return 0;
      })
      .filter((item) => {
        return (
          regx.test(item.type) ||
          regx.test(item.name) ||
          regx.test(item.topping)
        );
      });
  });

  return {
    setSortKey, searchedItems, addItem
  }
}
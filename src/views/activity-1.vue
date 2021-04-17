<template>
  <div class="flex flex-direction-column wrappper">
    <h1>Activity 1: Data sorting and filtering</h1>

    <!-- Add Item -->
    <add-item @added="addItem"></add-item>

    <!-- Search -->
    <div class="flex justify-content-between align-items-center p-y-5">
     Total items: {{searchedItems.length}}
      <input type="text" placeholder="Search..." v-model="searchQuery" class="w-50"/>
    </div>
    <!-- Data Table -->
    <table class="border-spacing">
      <thead>
        <tr>
          <th
            :class="{ active: currentSortKey == 'id' }"
            @click="setSortKey('id')"
          >
            Id
            <icon
              v-if="currentSortKey == 'id'"
              :sortDirection="currentSortDirection"
            />
          </th>
          <th
            :class="{ active: currentSortKey == 'type' }"
            @click="setSortKey('type')"
          >
            Type
            <icon
              v-if="currentSortKey == 'type'"
              :sortDirection="currentSortDirection"
            />
          </th>
          <th
            :class="{ active: currentSortKey == 'name' }"
            @click="setSortKey('name')"
          >
            Name
            <icon
              v-if="currentSortKey == 'name'"
              :sortDirection="currentSortDirection"
            />
          </th>
          <th
            :class="{ active: currentSortKey == 'topping' }"
            @click="setSortKey('topping')"
          >
            Topping
            <icon
              v-if="currentSortKey == 'topping'"
              :sortDirection="currentSortDirection"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in searchedItems" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.topping }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { ref } from "vue";
import useSortable from "../use/sortable";
import goods from "../assets/data.json";
import icon from "../components/activity-1/icon.vue";
import addItem from "../components/activity-1/addItem.vue";

export default {
  components: {
    icon,
    addItem,
  },
  setup() {
    const items = ref(goods);
    const currentSortKey = ref("name");
    const currentSortDirection = ref("asc");
    const searchQuery = ref("");

    const { setSortKey, searchedItems, addItem } = useSortable(
      items,
      searchQuery,
      currentSortKey,
      currentSortDirection
    );

    return {
      setSortKey,
      searchedItems,
      addItem,
      currentSortKey,
      currentSortDirection,
      searchQuery,
    };
  },
};
</script>
<style>
.wrappper {
  margin: 0 auto;
  max-width: 75%;
}

@media only screen 
  and (orientation: portrait) { 
  .wrappper {
    max-width: 95%;
  }
}

/* Table Style */

.border-spacing {
  border-spacing: 7px;
}

table {
  border: 1px solid lightgrey;
  text-align: left;
}
th {
  cursor: pointer;
}
</style>

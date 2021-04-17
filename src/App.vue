<template>
  <div id="nav" class="border-bottom p-y-20">
    <router-link to="/"> Activity 1 </router-link>
    <router-link to="/activity-2"> Activity 2 </router-link>
    <router-link to="/activity-3"> Activity 3 </router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  font-size: 1.1em;
}

.router-link-active,
.router-link-exact-active,
.active {
  color: palevioletred;
  font-weight: bold;
}

a {
  padding: 5px 10px;
  text-decoration: none;
}

button,
input {
  font-size: 0.95em;
  padding: 10px;
  border: 0px;
  border-radius: 5px;
  margin: 3px;
}

input {
  background: papayawhip;
}

button {
  background: palegoldenrod;
  cursor: pointer;
}

button:hover {
  background: palevioletred;
}

#app pre {
  text-align: left;
  display: flex;
  justify-content: center;
  border: 1px dashed peachpuff;
  padding: 2px 0;
  font-size: 0.95em;
  color: darkolivegreen;
}

</style>

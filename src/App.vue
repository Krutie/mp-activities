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
input,
select {
  font-size: 0.95em;
  padding: 10px;
  border: 0px;
  border-radius: 5px;
  margin: 3px;
}

input,
select {
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

/* Utility CSS */

.border-rounded {
  border-bottom: 1px solid lightgrey;
  border-radius: 5px;
}
.border-bottom {
  border-bottom: 1px solid lightgrey;
}
.p-y-5 {
  padding: 5px 0;
}
.p-y-10 {
  padding: 10px 0;
}
.p-y-20 {
  padding: 20px 0;
}
.text-left {
  text-align: left;;
}
.text-center {
  text-align: center;;
}
.flex {
  display: flex;
}
.justify-content-center {
  justify-content: flex-end;
}
.justify-content-between {
  justify-content: space-between;
}
.align-items-center {
  align-items: center;
}
.flex-direction-column {
  flex-direction: column;
}
.noHover{
    pointer-events: none;
}
.w-50 {
  width: 50%;
}
</style>
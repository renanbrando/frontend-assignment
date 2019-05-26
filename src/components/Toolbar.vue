<template>
  <div class="toolbar">
    <a class="active" href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</template>

<script>
export default {
  name: "Toolbar"
};
</script>

<style lang="scss" scoped>

/* Add a black background color to the top navigation */
.toolbar {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.toolbar a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 24px;
}

/* Change the color of links on hover */
.toolbar a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.toolbar a.active {
  background-color: #4CAF50;
  color: white;
}

</style>

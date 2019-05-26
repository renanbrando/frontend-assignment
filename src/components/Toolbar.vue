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

@import '../styles/variables.scss';

.toolbar {
    background-color: $primary;
    overflow: hidden;

    a {
        float: left;
        color: $primary-color-text;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 24px;

        &:hover {
            background-color: $primary-dark;
        }

        &.active {
            background-color: $primary-light;
        }
    }
}

</style>

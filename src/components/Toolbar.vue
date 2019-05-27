<template>
  <div class="toolbar">
    <div>
      <a class="logo"><font-awesome-icon :icon="['fab', 'vuejs']"/></a>
    </div>
    <div>
      <div class="input-container">
        <input class="tool-input" type="text" placeholder="Seach Companies"/>
        <font-awesome-icon class="icon" :icon="['fas', 'search']"/>
      </div>
    </div>
    <div>
      <a class="tool-btn active">New Smartlist</a>
      <a class="tool-btn">Prospect</a>
      <a class="tool-btn">Alert</a>
      <a class="tool-btn">Learn</a>
    </div>
    <div>
      <a class="logo"><font-awesome-icon :icon="['fab', 'chrome']"/></a>
      <a class="logo"><font-awesome-icon :icon="['fas', 'user-circle']"/></a>
    </div>
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
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      font-size: 32px;
    }

    .input-container {
      display: flex;
      margin-top: 4px;
      width: 100%;
    }

    .icon {
      margin: 3px;
      padding: 10px;
      background: $primary-light;
      border: 1px solid $primary;
      border-radius: 4px;
      color: $primary-color-text;
      height: 18px;
      min-width: 30px;
      text-align: center;
    }

    .tool-input {
      background: $primary-dark;
      border: 1px solid $primary;
      color: $primary-color-text;
      min-width: 25vw;

      &::placeholder {
        color: $primary-color-text;
      }
    }

    .tool-btn {
      margin: 9px;
    }

    a {
        float: left;
        color: $primary-color-text;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 14px;
        border-radius: 4px;

        &:hover {
            background-color: $primary-dark;
        }

        &.active {
            background-color: $primary-light;
        }
    }
}

</style>

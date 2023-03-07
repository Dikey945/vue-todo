<template>
  <button
      :class="mode ? 'bg-green-400' : 'bg-transparent' "
      class="logout"
  >
    <slot></slot>
  </button>
</template>

<script>

export default {
  props: ['fillMode'],
  name: "BaseButton",
  setup(props) {
    const mode = props.fillMode
    return {
      mode
    }
  }
}
</script>

<style scoped>
  .logout {
    color: white;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid white;
    border-radius: 10px;
  }

  .logout:hover,
  .logout:active {
    border: 1px solid yellow;
    color: yellow

  }
</style>
<template>
  <button
      :class="mode ? 'bg-green-400' : 'bg-white' "
      class="rounded-xl px-[10px] py-[5px] block border-gray-500"
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

</style>
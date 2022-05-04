<template>
  <p>{{ output }}</p>
</template>

<script>
export default {
  name: "RNPoutput",
  props: {
    output: {default: '?'}
  }
}
</script>

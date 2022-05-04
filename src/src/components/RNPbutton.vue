<template>
  <button @click="$emit('input',value)" :type="value === '=' ? 'submit' : null" :value="value">{{ value }}</button>
</template>

<script  lang="ts">
export default {
  name: "RNPbutton",
  props: {
    value: {required: false, default: '='},
  },
}
</script>

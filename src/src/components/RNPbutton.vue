<template>
  <button
    :class="['rnp-button', look ? `rnp-button__${look}` : false, size ? `rnp-button__${size}` : false]"
    @click="$emit('input', value)"
    :type="value === '=' ? 'submit' : null"
    :value="value"
  >
    {{ value }}
  </button>
</template>

<script  lang="ts">
export default {
  name: "RNPbutton",
  props: {
    value: { required: false, default: "=" },
    look: { type: String, default: "" },
    size: { type: String, default: "" },
  },
};
</script>

<style>
.rnp-button {
  width: 64px;
  min-width: max-content;
  height: 64px;
  border-radius: 15px;
  background: #b1beea;
  border: none;
  color: black;
  font-weight: 900;
  opacity: 0.8;
  font-size: 19px;
  margin: 10px;
}

.rnp-body__numbers > .rnp-button:last-child {
  width: 230px;
}

.rnp-button:hover {
  cursor: pointer;
  opacity: 1;
  transition: all 0.4s;
}
.rnp-button__operator {
  background: #8095ce;
  color: black;
  margin-left: 0;
}
.rnp-button__sumary {
  background: #c58ade;
  color: black;

  margin-left: 0;
}
.rnp-button__clear {
  background: #8869a5;
  color: black;

  margin-left: 0;
}
.rnp-button__medium {
  width: 128px;
}
</style>
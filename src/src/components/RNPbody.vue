<template>
  <div class="rnp-body">
    <div class="rnp-body__numbers">
      <RNPbutton class="" @input="input" v-for="(element,index) in elements.numbers" :key="index" :value="element"/>
    </div>

    <div class="rnp-body__operator">
      <RNPbutton @input="input" look="operators" v-for="(element,index) in elements.operators" :key="index" :value="element"/>
    </div>

    <div>
      <RNPbutton @input="input" look="clear" :value="'C'" />
      <RNPbutton @input="input" look="sumary" />
    </div>

    <RNPoutput :output="output" />
  </div>
  <div>
    {{ dataForCalculate }}
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import RNPbutton from "@/components/RNPbutton.vue";
import RNPoutput from "@/components/RNPoutput.vue";
import {calculateRNP} from "../../index";

export default defineComponent({
  name: 'RNPbody',

  components: {RNPoutput, RNPbutton},

  data() {
    return {
      elements: {
        numbers: [
          9, 8, 7, 6,
          5, 4, 3, 2,
          1, 0
        ],
        operators: ['+', '-', '*', '/'],
      },
      output:'',
      dataForCalculate: [],
    }
  },
  methods: {
    input(e: string|number) {
      if (e === 'C') {
        this.clear();
      }

      else if (e==='=') {
        console.log(this.output)

        this.output = calculateRNP(this.dataForCalculate)[0];
      }

      else {
        this.dataForCalculate.push(e)
      }

    },

    clear() {
      this.dataForCalculate = [];
      this.output = '';
    }
  },
});

</script>

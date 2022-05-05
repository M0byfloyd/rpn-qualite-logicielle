<template>
  <div class="rnp-body">
    <div class="results-container">
      <div class="calcul">
        <p v-if="dataForCalculate.length">
          <span v-for="(data,index) in dataForCalculate" :key="index">
            {{ data }}
          </span>
        </p>
      </div>

      <RNPoutput :output="output" class="result"/>
    </div>

    <div class="result-reset-btn">
      <RNPbutton @input="input" look="clear" :value="'C'"/>
      <RNPbutton @input="input" look="sumary"/>
    </div>

    <div class="rnp-body__numbers">
      <RNPbutton class="" @input="input" v-for="(element, index) in elements.numbers" :key="index" :value="element"/>
    </div>

    <div class="rnp-body__operator">
      <RNPbutton
          @input="input"
          look="operators"
          v-for="(element, index) in elements.operators"
          :key="index"
          :value="element"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import RNPbutton from "@/components/RNPbutton.vue";
import RNPoutput from "@/components/RNPoutput.vue";
import {calculateRNP} from "../../index";

export default defineComponent({
  name: "RNPbody",

  components: {RNPoutput, RNPbutton},

  data() {
    return {
      elements: {
        numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, 'space'],
        operators: ["+", "-", "*", "/"],
      },
      output: "",
      dataForCalculate: [],
    };
  },
  methods: {
    input(e: string | number) {
      if (e === "C") {
        this.clear();
      } else if (e === "=") {
        this.output = calculateRNP(this.dataForCalculate);
      } else {
        this.dataForCalculate.push(e);
      }
    },

    clear() {
      this.dataForCalculate = [];
      this.output = "";
    },
  },
});
</script>

<style>
.rnp-body {
  width: 20%;
  border-radius: 10%;
  box-shadow: 2px 5px 7px 5px rgba(0, 0, 0, 0.105);
  padding: 10px;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

@media (max-width: 2200px) {
  .rnp-body {
    width: 25%;
  }
}

@media (max-width: 1800px) {
  .rnp-body {
    width: 30%;
  }
}

@media (max-width: 1500px) {
  .rnp-body {
    width: 40%;
  }
}

@media (max-width: 1150px) {
  .rnp-body {
    width: 50%;
  }
}

@media (max-width: 800px) {
  .rnp-body {
    width: 60%;
  }
}

.calcul {
  border-bottom: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
      90deg,
      rgba(177, 190, 234, 1) 34%,
      rgba(197, 138, 222, 1) 65%,
      rgba(136, 105, 165, 1) 100%
  );
  padding: 20px;
  width: 70%;

  color: black;
  font-weight: 700;
  opacity: 0.8;
  font-size: 19px;
}

.result {
  width: 100%;
  margin-bottom: 5px;

  color: black;
  font-weight: 700;
  opacity: 0.8;
  font-size: 19px;
}

.results-container {
  width: 57%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.result-reset-btn {
  width: 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}

.rnp-body__numbers {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 57%;
}

.rnp-body__operator {
  width: 20%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>

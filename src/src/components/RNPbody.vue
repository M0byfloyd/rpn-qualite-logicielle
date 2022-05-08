<template>
  <div class="rnp-body">
    <div class="results-container">
      <div class="calcul">
        <p v-if="dataForCalculate.length">
          <span v-for="(data, index) in dataForCalculate" :key="index">
            {{ data }}
          </span>
        </p>
        <p v-else></p>
      </div>

      <RNPoutput :output="output" class="result" />
    </div>

    <div class="rnp-buttons">
      <div class="rnp-body__numbers">
        <RNPbutton @input="input" v-for="(element, index) in elements.numbers" :key="index" :value="element" />
      </div>

      <div class="rnp-body__operators">
        <div class="result-reset-btn">
          <RNPbutton @input="input" look="clear" :value="'C'" />
          <RNPbutton @input="input" look="sumary" />
        </div>

        <div class="rnp-body__operator">
          <RNPbutton
            @input="input"
            look="operator"
            v-for="(element, index) in elements.operators"
            :key="index"
            :value="element"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RNPbutton from "@/components/RNPbutton.vue";
import RNPoutput from "@/components/RNPoutput.vue";
import { calculateRNP } from "../../index";

export default defineComponent({
  name: "RNPbody",

  components: { RNPoutput, RNPbutton },

  data() {
    return {
      elements: {
        numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, " "],
        operators: ["+", "-", "*", "/", "NEGATE"],
      },
      output: "",
      dataForCalculate: "",
    };
  },
  methods: {
    clear() {
      this.dataForCalculate = "";
      this.output = "";
    },

    convert(expression: string) {
      let convertedArray = expression.split(" ");
      if (convertedArray[convertedArray.length - 1] === "") {
        convertedArray.pop();
      }

      return convertedArray.map((x) => (!this.elements.operators.includes(x) ? parseInt(x) : x));
    },

    input: function (inputReturnedValue: string | number) {
      if (inputReturnedValue === "C") {
        return this.clear();
      }

      if (typeof inputReturnedValue === "string" && this.elements.operators.includes(inputReturnedValue)) {
        return (this.dataForCalculate += this.operatorConversion(inputReturnedValue));
      }

      if (inputReturnedValue === "=") {
        console.log(calculateRNP(this.convert(this.dataForCalculate)));
        return (this.output = calculateRNP(this.convert(this.dataForCalculate)));
      }
      this.dataForCalculate += inputReturnedValue;
    },

    operatorConversion(value: number | string) {
      return " " + value + " ";
    },
  },
});
</script>

<style>
.rnp-body {
  width: 450px;
  border-radius: 20px;
  box-shadow: 2px 5px 7px 5px rgba(0, 0, 0, 0.105);
  padding: 10px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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
  padding-top: 10px;
}

.results-container {
  border-radius: 10px;
  border: 1px solid rgb(247, 239, 239);
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #e7eff8;
}

.results-container p {
  margin: 0;
  height: 40px;
  font-size: 30px;
}

.result-reset-btn {
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
  width: 60%;
}

.rnp-body__operator {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.rnp-buttons {
  display: flex;
}

.rnp-body__operators {
  display: flex;
  flex-direction: column;
  width: 40%;
}

.rnp-button__operator[value="NEGATE"] {
  width: 75%;
}

@media (max-width: 550px) {
  .rnp-body {
    width: 300px;
    height: 400px;
    padding: 15px;
  }

  .rnp-button {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    font-size: 12px;
    margin: 5px;
  }

  .rnp-body__numbers {
    width: 54%;
  }

  .results-container p {
    margin: 0;
    height: 20px;
  }

  .rnp-button__operator[value="NEGATE"] {
    width: 70%;
    margin-right: 5px;
  }
}
</style>

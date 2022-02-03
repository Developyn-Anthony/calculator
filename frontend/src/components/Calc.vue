<template>
  <div>
    <table class="calc">
      <tr>
        <td colspan="3" class="display">
          <div>{{ current }}</div>
        </td>
        <td>
          <input
            type="button"
            class="button button-alt"
            value="C"
            v-on:click="reset()"
          />
        </td>
      </tr>
      <tr>
        <td>
          <input type="button" class="button" value="7" v-on:click="input(7)" />
        </td>
        <td>
          <input type="button" class="button" value="8" v-on:click="input(8)" />
        </td>
        <td>
          <input type="button" class="button" value="9" v-on:click="input(9)" />
        </td>
        <td>
          <input type="button" class="button" value="+" v-on:click="operationSelect('add')"/>
        </td>
      </tr>
      <tr>
        <td>
          <input type="button" class="button" value="4" v-on:click="input(4)" />
        </td>
        <td>
          <input type="button" class="button" value="5" v-on:click="input(5)" />
        </td>
        <td>
          <input type="button" class="button" value="6" v-on:click="input(6)" />
        </td>
        <td>
          <input type="button" class="button" value="-" v-on:click="operationSelect('subtract')"/>
        </td>
      </tr>
      <tr>
        <td>
          <input type="button" class="button" value="1" v-on:click="input(1)" />
        </td>
        <td>
          <input type="button" class="button" value="2" v-on:click="input(2)" />
        </td>
        <td>
          <input type="button" class="button" value="3" v-on:click="input(3)" />
        </td>
        <td>
          <input type="button" class="button" value="*" v-on:click="operationSelect('times')" />
        </td>
      </tr>
      <tr>
        <td>
          <input type="button" class="button button-dot" value="." v-on:click="input('.')" />
        </td>
        <td>
          <input type="button" class="button" value="0" v-on:click="input(0)" />
        </td>
        <td>
          <input type="button" class="button button-alt" value="=" v-on:click="result()"/>
          </td>
        <td>
          <input type="button" class="button" value="/" v-on:click="operationSelect('divide')"/>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Calc",
  data() {
    return {
      current: 0,
      prev: null,
      operator: "",
    };
  },
  methods: {
    reset() {
      this.current = "0";
    },
    input(num) {
      if (this.current == "0" || this.current == this.prev) {
        this.current = "";
      }
      return (this.current += num);
    },
    operationSelect(operator) {
      this.operator = operator;
      this.prev = this.current
    },
    result() {
      axios.get(`http://localhost:3000/${this.operator}/${this.prev}/${this.current}`)
      .then(response => {
        this.current = response.data;
      })
      .catch(error => {
        this.current = error.response.data;
      });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calc {
  padding: 0.6rem;
  border-radius: 1em;
  height: 22.75rem;
  width: 22rem;
  margin: auto;
  background-color: lightgrey;
}

.display {
  font-family: "Orbitron", sans-serif;
  background-color: #fff;
  border: solid black 0.2rem;
  color: black;
  border-radius: 0.325rem;
  width: 100%;
  height: 2.5rem;
  text-align: right;
  padding-right: 1rem;
}

.button {
  font-family: "Orbitron", sans-serif;
  background-color: lightseagreen;
  color: #fff;
  width: 4rem;
  border-radius: 0.325rem;
  height: 3rem;
  font-size: 1.5rem;
  cursor: pointer;
}

.button-alt {
  background-color: lightcoral;
}

.button-dot {
  font-size: 2rem;
}

.button:hover {
  background-color: seagreen;
}

.button-alt:hover {
  background-color: coral;
}
</style>

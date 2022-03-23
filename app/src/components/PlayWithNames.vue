<template>
  <div class="hello">
    <h2>Play With Names</h2>

    <form>
      <input class="form-control input-lg" v-model="input_full_name" id="input_full_name" placeholder="Full name" type="text">
    </form>

    <div class="panel-body">
      <ul>
        <li> Input: <span id="input"></span></li>
        <li> Number of characters: <span id="number_of_chars"></span></li>
        <li> Number of individual characters: <span id="number_of_individual_chars"></span></li>
        <li> Individual Characters: <span id="characters"></span></li>

      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'PlayWithNames',
    props: {
      msg: String
    },
    data() {
    return {
      original_input: "",
      number_of_chars: 0,
      number_of_individual_chars: 0,
      input: ""
    }
    },
    mounted() {
      document.getElementById("input_full_name").addEventListener("keyup", this.analyze)
    },
    methods: {
      analyze: function (event) {
        console.log(event)
        console.log(this)
        // Get input
        let input = "";
        let original_input = "";
        let number_of_chars = 0;
        let number_of_individual_chars = 0;
        input = document.getElementById("input_full_name").value;
        original_input = input;

        // Get input trimmed
        input = input.trim();

        // Get whitespace removed
        input = input.replace(/\s/g, '');

        // Get input lowercase
        input = input.toLowerCase();

        // Get input number of characters
        number_of_chars = input.length;

        // Remove duplicates from input by using Set constructor
        input = Array.from(new Set(input));

        number_of_individual_chars = input.length;

        // Order items in array
        function SortArray(x, y) {
          return x.localeCompare(y);
        }
        input = input.sort(SortArray);

        // Output results
        document.getElementById("input").innerHTML = original_input;
        document.getElementById("number_of_chars").innerHTML = number_of_chars;
        document.getElementById("number_of_individual_chars").innerHTML = number_of_individual_chars
        document.getElementById("characters").innerHTML = input;
      }
    }

  }
</script>

<style scoped>

</style>
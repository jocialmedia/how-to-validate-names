<template>
  <div class="hello">
    <h2>How hard is my name to validate?</h2>
    <br><br>
    <form>
      <input class="form-control input-lg" v-model="input_full_name" id="input_full_name" placeholder="Full name"
        type="text">
    </form>

    <div class="panel-body">
      <br><br>
      <table class="">
        <tr>
          <td>Input:</td>
          <td>{{ original_input }}</td>
        </tr>
        <tr>
          <td>Number of characters:</td>
          <td>{{ number_of_chars }}</td>
        </tr>
        <tr>
          <td>Number of individual characters:</td>
          <td>{{ number_of_individual_chars }}</td>
        </tr>
      </table>

      <b>Individual Characters:</b>

      <div>

        <span class="letter" v-for="(item) in input" :key="item.id">
          <h2>{{ item }}</h2>
          <small>{{ characters[item]['unicode_name'] }}<br>
            {{ characters[item]['unicode_hex'] }} </small>
        </span>
      </div>
      <br><br>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'HowHardIsMyNameToValidate',
    props: {
      msg: String
    },
    data() {
      return {
        input_full_name: "",
        original_input: "",
        number_of_chars: 0,
        number_of_individual_chars: 0,
        input: "",
        characters: [],
        characters_info: []
      }
    },
    setup() {

    },
    mounted() {
      document.getElementById("input_full_name").addEventListener("keyup", this.analyze)
    },
    methods: {
      async getCharacters() {
        let path = 'data/characters.json'
        const res = await fetch(path);
        const data = await res.json();
        this.characters = data;
      },
      analyze: function () {
        // Get input
        let input = "";
        input = document.getElementById("input_full_name").value;
        this.original_input = input;

        // Get input trimmed
        input = input.trim();

        // Get whitespace removed
        input = input.replace(/\s/g, '');

        // Get input lowercase
        input = input.toLowerCase();

        // Get input number of characters
        this.number_of_chars = input.length;

        // Remove duplicates from input by using Set constructor
        input = Array.from(new Set(input));

        this.number_of_individual_chars = input.length;

        // Order items in array
        function SortArray(x, y) {
          return x.localeCompare(y);
        }
        this.input = input.sort(SortArray);

      }
    },
    beforeMount() {
      this.getCharacters();
    },

  }
</script>

<style scoped>
  .letter {
    width: 80px;
    height: 200px;
  }
</style>
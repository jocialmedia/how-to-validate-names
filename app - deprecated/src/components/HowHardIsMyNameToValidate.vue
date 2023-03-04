<template>
  <div class="hello">
    <h2>How hard is my name to validate?</h2>
    <br><br>
    <form>
      <input class="form-control input-lg" v-model="input" id="input_full_name" placeholder="Full name" type="text">
    </form>

    <div class="panel-body">
      <br><br>

      <span>Number of characters: {{ number_of_chars }} (Number of individual characters:
        {{ number_of_individual_chars }})</span>
      <br><br>
      <b>Individual Characters:</b>

      <div>
        <span class="letter" v-for="(item) in input_array" :key="item.id">
          <h2>{{ item }}</h2>
          <span class="letter_info"
            v-if="characters">{{ characters[item]['unicode_hex'] }}
            <br>{{ characters[item]['unicode_name'] }}
          </span>
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
        input: this.$route.query.input,
        input_array: [],
        number_of_chars: 0,
        number_of_individual_chars: 0,
        characters: [],
        characters_info: []
      }
    },
    setup() {

    },
    watch: {
      input(newVal) {

        this.$router.push({
          query: {
            ...this.$route.query,
            input: newVal
          }
        });
      },
      '$route.query.input': function (val) {
        this.input = val;
      }
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
        let input_work = "";
        input = document.getElementById("input_full_name").value;

        // Get input trimmed
        input_work = input.trim();

        // Get whitespace removed
        input_work = input_work.replace(/\s/g, '');

        // Get input lowercase
        input_work = input_work.toLowerCase();

        // Get input number of characters
        this.number_of_chars = input_work.length;

        // Remove duplicates from input by using Set constructor
        input_work = Array.from(new Set(input_work));

        this.number_of_individual_chars = input_work.length;

        // Order items in array
        function SortArray(x, y) {
          return x.localeCompare(y);
        }
        this.input_array = input_work.sort(SortArray);
      },
    },
    beforeMount() {
      this.getCharacters();
      if (this.$route.query.input === undefined) {
        this.$router.push({
          query: {
            input: ""
          }
        });
      }
    },
    mounted() {
      this.analyze();
      document.getElementById("input_full_name").addEventListener("input", this.analyze);
    }
  }
</script>

<style scoped>
  .letter {
    width: 80px;
    height: 160px;
    line-height: 1.1 !important;
  }

  .letter_info {
    font-size: x-small;
  }
</style>
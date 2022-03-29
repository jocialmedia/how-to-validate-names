<template>
  <div class="container">
    <div class="row">
      <h1>Languages and Alphabets</h1>
      <h2>Languages</h2>

      <table class="table table-bordered table-striped">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Local Name</th>
          <th>ISO<span class="nowrap">639-2</span></th>
          <th>On national level</th>
          <th>On subnational level</th>
          <th><span class="nowrap">EU language</span> <br>since</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in languages_filtered" :key="item.id">
            <td> {{index+1}} </td>
            <td><a :href="item.wikipedia_en">{{item.language}} </a></td>
            <td> {{item.local_name}} </td>
            <td> {{item.iso_639_2}} </td>
            <td><span v-for="(sub_item) in item.spoken_national_level" :key="sub_item.id">
                {{sub_item}}, </span></td>
            <td><span v-for="(sub_item) in item.spoken_subnational_level" :key="sub_item.id">
                {{sub_item}}, </span></td>
            <td> {{item.eu_language_since}} </td>
          </tr>
        </tbody>
      </table>


      <h2>Alphabets</h2>

      <p>Red color marks characters which are not part of <a href="https://en.wikipedia.org/wiki/ISO_basic_Latin_alphabet">ISO Basic Latin 1</a>.</p>
      <table class="table table-bordered table-striped">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Alphabet</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in languages_filtered" :key="item.id">
            <td> {{index+1}} </td>
            <td> {{item.language}} </td>
            <td>
              <span v-for="(sub_item) in item.alphabet_chars_checked" :key="sub_item.id" class="letter" :class="sub_item.split('-')[1]">
                  {{ sub_item.split("-")[0] }}
                </span>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'LanguagesPage',
    data() {
      return {
        data: {},
        languages: [],
        languages_filtered: [],
        alphabet_chars_checked: []
      }
    },
    components: {},
    methods: {
      async getLanguages() {
        let path = 'data/languages.json'
        const res = await fetch(path);
        const data = await res.json();
        this.languages = data;
        this.getFilteredLanguages();
      },
      async getFilteredLanguages() {
        this.languages_filtered = this.languages.filter(language => language.category.includes('eu'));
        this.getLanguageCoverage();
      },
      async getLanguageCoverage() {
        //let english_alphabet = [];
        let english_alphabet = this.languages[7].alphabet_chars;
        console.log(typeof(this.languages[7].alphabet_chars))
        for (var i = 0; i < this.languages.length; i++) {
          var language = this.languages[i];
          let array_length = language.alphabet_chars.length;
          let alphabet_chars_checked = []
          for (var j = 0; j < array_length; j++) {
            if (english_alphabet.includes(language.alphabet_chars[j])) {
              let thisChar = language.alphabet_chars[j] + "-covered_by_latin_1"
              alphabet_chars_checked.push(thisChar);
            } else {
              let thisChar = language.alphabet_chars[j] + "-not_covered_by_latin_1"
              alphabet_chars_checked.push(thisChar);
            }
          this.languages[i]['alphabet_chars_checked'] = alphabet_chars_checked;
        }
}
        this.languages_filtered = this.languages.filter(language => language.category.includes('eu'))
      },
    },
    watch: {

    },
    beforeCreate() {
      console.log("beforeCreate")
    },
    beforeMount() {
      console.log("beforeMount");
      this.getLanguages();
    },
    mounted() {
      console.log("mounted")
      this.getFilteredLanguages();
    },
    updated() {
      console.log("updated");
    },

  }
</script>

<style>
  .letter {
    font-size: normal;
    border: 1px #000 solid;
    width: 60px;
    height: 100px;
    padding: 5px;
    margin: 5px;
    float: left;
    display: block;
  }

  .nowrap {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .covered_by_latin_1 {
    background: #FCEDDA;
  }

  .not_covered_by_latin_1 {
    background: #EE4E34;
  }

</style>
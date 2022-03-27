<template>
  <div class="container">
    <div class="row">
      <h1>Generate and copy a regex</h1>

      <small>First prototype for 24 EU languages. More coming soon.</small>

    </div>

    <div class="row">
      <h2>Choose languages</h2>

      <div class="card">
        <div class="card-body">
          <span v-for="(item, key) in languagesPrepared" :key="item.id" class="options">
            <input type="checkbox" :value="key" v-model="checkedBoxes">
            <label>{{ key }}</label>
          </span>
        </div>
      </div>
      <button @click="toggleSelectOnAllCheckboxes" class="btn btn-outline-success btn-sm">Select all</button>
    </div>


    <div class="row">

      <h2>Generate and copy a regex:</h2>
      <div class="card">
        <div class="card-body">
          <small>Covers the letters of: {{ checkedBoxes.join(", ") }}</small>
          <hr>
          <code class="regex">Regex: ^[A-Za-z {{ regexCharsPrepared }}]+$
          </code>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RegexGenerator',
    data() {
      return {
        languages: {},
        languagesPrepared: {},
        regexCharsPrepared: [],
        checkedBoxes: []
      }
    },
    components: {},
    watch: {
      checkedBoxes() {
        this.generateRegex()
        console.log("Watch is triggered")
      }
    },
    methods: {
      async getLanguagesPrepared() {
        let path = 'data/languages.json'
        const res = await fetch(path);
        const data = await res.json();
        this.languages = data;
        for (let i = 0; i < this.languages.length; i++) {
          if (this.languages[i].category === "eu") {
            this.languagesPrepared[this.languages[i].language] = this.languages[i].alphabet_chars
          }
        }
      },
      async generateRegex() {
        this.regexCharsPrepared = new Set();
        this.iso_latin_1 = this.languagesPrepared["English"]
        // loop short ids of languages in array checkedBoxes
        for (let i = 0; i < this.checkedBoxes.length; i++) {
          // loop chars for each selected language
          let chars = this.languagesPrepared[this.checkedBoxes[i]]
          for (let j = 0; j < chars.length; j++) {
            if (this.iso_latin_1.includes(chars[j])) {
              console.log("nooooooooo")
            } else {
              this.regexCharsPrepared.add(chars[j])
            }
          }
        }
        this.regexCharsPrepared = Array.from(this.regexCharsPrepared);
        this.regexCharsPrepared.sort()
        this.regexCharsPrepared = this.regexCharsPrepared.join("")
      },
      toggleSelectOnAllCheckboxes: function () {
        if (this.checkedBoxes.length) {
          this.checkedBoxes = []
        } else {
          for (let i = 0; i < Object.keys(this.languagesPrepared).length; i++) {
            this.checkedBoxes = Object.keys(this.languagesPrepared)
          }
        }
        console.log(this.checkedBoxes)
      },
    },
    beforeMount() {
      this.getLanguagesPrepared();
    },
  }
</script>

<style>
  .button {
    width: auto;
  }

  .all {
    float: left;
    width: 100%;
  }

  .options {
    float: left;
    width: auto !important;
  }

  label {
    margin: 10px;
  }

  .regex {
    font-size: larger;
  }

  .row {
    margin-bottom: 50px;
  }
</style>
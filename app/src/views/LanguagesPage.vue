<template>
  <div class="container">
    <div class="row">
      <h1>Languages and Alphabets</h1>
      <p>Official languages of the European Union.</p>
      <table class="table table-bordered table-striped">
        <thead>
          <th></th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filteredLanguages" :key="item.id">
            <td> {{index+1}} </td>
            <td> {{item.language}} </td>
            <td>
            <span v-for="(sub_item) in item.alphabet_chars" :key="sub_item.id" class="letter">

             {{sub_item}} </span>

            </td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    name: 'LanguagesPage',
    data() {
      return {
        languages: [],
        filteredLanguages: []
      }
    },
    components: {},
    mounted() {
      axios.get('data/languages.json')
        .then(response => {
          const languages = response.data
          this.filteredLanguages = languages.filter(language => language.category.includes('eu'))
        })
    }
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
</style>
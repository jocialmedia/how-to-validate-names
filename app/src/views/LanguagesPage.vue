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
          <tr v-for="(item, index) in filteredLanguages" :key="item.id">
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
      <table class="table table-bordered table-striped">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Alphabet</th>
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

  .nowrap {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
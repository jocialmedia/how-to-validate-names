<template>
  <div class="container">
    <div class="row">
      <h1>Test Cases</h1>
      <p>
        <ul>
          <li>How many languages: 24</li>
          <li>How many letters alltogether: 731</li>
          <li>How many unique letters: 157</li>
          <li>How many unique letters without ISO Basic Latin 1: 131</li>
        </ul>
      </p>
      <table class="table table-bordered table-striped">
        <thead>
          <th>Id</th>
          <th>Language</th>
          <th>Use Case</th>
          <th>Exampe Given Name</th>
          <th>Example Family Name</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filteredTestCases" :key="item.id">
            <td> {{index+1}} </td>
            <td> {{item.language}} </td>
            <td> {{item.use_case}} </td>
            <td><a :href="item.info"> {{item.example_first_name}} </a></td>
            <td><a :href="item.info"> {{item.example_last_name}} </a></td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    name: 'TestCases',
    data() {  
      return {
        test_cases: [],
        filteredTestCases: []
      }
    },
    components: {},
    mounted() {
      axios.get('data/test-data.json')
        .then(response => {
          const test_cases = response.data
          this.filteredTestCases = test_cases
        })
    }
  }
</script>

<style>
</style>
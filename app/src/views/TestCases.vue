<template>
  <div class="container">
    <div class="row">
      <h1>Test Cases</h1>
      <p>WIP.</p>
      <table class="table table-bordered table-striped">
        <thead>
          <th></th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filteredTestCases" :key="item.id">
            <td> {{index+1}} </td>
            <td> {{item.language}} </td>
            <td> {{item.use_case}} </td>
            <td> {{item.example_first_name}} </td>
            <td> {{item.example_last_name}} </td>
            <!-- <td><a href="' {{item.info}} '">Info</a></td> -->
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
      axios.get('test-data.json')
        .then(response => {
          const test_cases = response.data
          this.filteredTestCases = test_cases
        })
    }
  }
</script>

<style>
</style>
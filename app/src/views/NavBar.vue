<template>
    <div id="nav">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
               <router-link class="navbar-brand" to="/">How to validate Names</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/languages">Languages</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/test-cases">Test Cases</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">About</router-link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
<div class="alert alert-danger">
  <strong>Please beware:</strong> This is a prototype and work in progress. More information and content are in the 
   <a href="https://github.com/jocialmedia/how-to-validate-names">repository on Github</a> 
</div>
    </div>


</template>

<script>
    export default {
        name: 'NavBar',
        components: {}
    }
</script>

<style>
    #nav {
        margin-bottom: 30px;
    }
</style>
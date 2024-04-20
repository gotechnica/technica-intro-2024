<template>
  <div class="flex-container">
    <nav id="navbar" class="navbar navbar-expand-lg navbar-dark">
      <a class="navbar-brand" href="https://gotechnica.org">
        <div class="logo"></div>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav text-center">
          <li class="nav-item">
            <a class="nav-link" href="./" target="_blank">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./serena" target="_blank">Serena</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./matthew" target="_blank">Matthew</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <div class="instruction-header">
    <h1>2024 Intro Project</h1>
  </div>
  <div class="container">
    <h1>INSTRUCTIONS</h1>
    <div class="row">
      <div class="col-md-7">
        <div class="instruction-body">
          <ol class="list-group">
            <li class="list-group-item">Name & Picture</li>
            <li class="list-group-item">Navbar</li>
            <li class="list-group-item">Button</li>
            <li class="list-group-item">Bootstrap (rows & cols)</li>
            <li class="list-group-item"><a href="https://vuejs.org/api/built-in-directives.html">Vue Directive</a></li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Reqs:
Name & Picture
Navbar
Button
Bootstrap
Vue directive (https://vuejs.org/api/built-in-directives.html)
Ensure that you use Vue's Composition API

Please name your page "{name}.vue" (without brackets)
Please make sure you're on a branch with your name -->

<style scoped>

.navbar-brand {
  margin-left: 10px;
  margin-right: 10px;
}

.navbar-toggler {
  border: none;
}

.nav-item {
  margin-left: 20px;
}

.nav-link {
  color: white;
  font-weight: bold;
}

.nav-link:hover,
.nav-link:active {
  opacity: 0.7;
  transition: 0.3s ease;
}

.navbar-shadow {
  background-color: #130F1F;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
}

#navbarNav {
  background-color: #130F1F;
  margin-left: -1%;
  margin-right: 0.5%;
}

body {
  overflow-x: hidden !important;
}

.instruction-header {
  text-align: center;
  padding-top: 1rem;
}

.instruction-body {
  text-align: left;
}

.container {
  background-color: #211642;
  width: 100%;;
  padding-left: 0%;
  padding-right: 0%;
}

</style>

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
        <li class="nav-item">
          <a class="nav-link" href="./sydney" target="_blank">Sydney</a>
        </li>
      </ul>
    </div>
  </nav>
  </div>
</template>

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
</style>

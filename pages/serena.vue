<template>
  <navbar />

  <div class="flex-container">
    <div class="row">
      <div class="col-4 about-me">
        <h1>About Me!</h1>
      </div>
      <div class="images">

      </div>
    </div>
    
  </div>
</template>
<style scoped>

.flex-container {
  background: rgb(2, 56, 2);
  color: white;
}

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

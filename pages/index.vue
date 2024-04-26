<template>
  <div class="wrapper">
    <navbar />
    <div class="flex-container">
      <div class="instruction-header">
        <h1>2024 Intro Project</h1>
      </div>
      <h1>INSTRUCTIONS</h1>
      <div class="row">
        <div class="col-md-7">
          <p>For the intro project, we just wanna make sure everyone is comfortable using the tech stack. 
            Everyone's goal is to make their own personal page telling the team a little bit about themselves.
            The only restrictions we have are that you make it a vue page and you include:
          </p>
          <ul class = "bullets">
            <li class="bullet">Name & picture</li>
            <li class="bullet">Navbar</li>
            <li class="bullet">Button</li>
            <li class="bullet">Bootstrap (rows & cols)</li>
            <li class="bullet">Vue Directive (v-if, v-show, etc. for more information, here's the <a href="https://vuejs.org/api/built-in-directives.html">Vue Directive Docs</a>)</li>
          </ul>
          <p>Good luck everyone! And if you need any questions, feel free to ask on Slack!</p>
        </div>
        <div class="col-md-5">
          <img class = "yaya" src = "/public/yaya.gif" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>


<style scoped>
.wrapper {
  background: #211642;
  width: 100%;
  min-height: 100vh;
}

.instruction-header {
  text-align: center;
  padding-top: 1rem;
}

.flex-container {
  margin-left: 3rem;
  margin-right: 3rem;
  color: white;
}

.yaya {
  margin-left:2rem;
  margin-top:0rem;
  border-radius: 30px;
  width: 90%;
}
</style>

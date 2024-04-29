<template>
  <div class="wrapper">
    <navbar />
    <div class="container">
      <div class="upper">
        <div class="row">
          <div class="col-lg-6 relative">
            <h1>Hi, I'm Kaiwen!</h1>
            <p>I'm a junior compsci + math major and have done Technica for the past couple of years (last yr's co-lead). I play club ultimate frisbee. Currently I'm abroad in Italy, and have traveled all around Europe. Excited to be part of the team, even though I won't see yall till next semester</p>
            <p id="align-btm">Check out where I've been! ⬇️</p>
          </div>
          <div class="col-lg-6">
            <img src="public/kaiwen_images/kaiwen.jpg" class="img-fluid" id="profile-pic">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const funfacts = ref(["I'm in Club Tennis and Gymnastics", "I'm a fiend for boba", "I've been to China a few times", "I'm from Florida (we do have an aligator in our back yard)", "My favorite color is green"])

function addTwo(a: boolean): number {
  if(a) {
    alert("This is actually true, try again!");
  } else {
    alert("You got it right! I would never play League  😔")
  }
  return 1;
}

</script>


<style scoped>

.wrapper {
  width: 100%;
  min-height: 100vh;
}

#profile-pic {
  border-radius: 10px;
}

.upper {
  margin-top: 5%;
  width: 50%;
  height: auto;
}

#align-btm {
  position: absolute;
  bottom: 0;
}

.relative {
  position: relative;
}
</style>

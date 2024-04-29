<template>
  <div class="wrapper-big">
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
            <img src="/kaiwen_images/kaiwen.jpg" class="img-fluid" id="profile-pic">
          </div>
        </div>
      </div>
      <div class="low">
          <div class="row">
            <div class="col-lg-4">
              <img src="/kaiwen_images/rome.jpg">
            </div>
            <div class="col-lg-4">
              <img src="/kaiwen_images/naples.jpg">
            </div>
            <div class="col-lg-4">
              <img src="/kaiwen_images/positano.jpg">
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <img src="/kaiwen_images/prague.jpg">
            </div>
            <div class="col-lg-4">
              <img src="/kaiwen_images/paris.jpg">
            </div>
            <div class="col-lg-4">
              <img src="/kaiwen_images/brussels.jpg">
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <img src="/kaiwen_images/amsterdam.jpg">
            </div>
            <div class="col-lg-4">
              <img src="/kaiwen_images/london.jpg">
            </div>
            <div class="col-lg-4">
              <img src="/kaiwen_images/dublin.jpg">
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <img src="/kaiwen_images/munich.jpg">
            </div>
            <div class="col-lg-4">
              <img src="/kaiwen_images/barcelona.jpg">
            </div>
            <div class="col-lg-4">
              <img src="/kaiwen_images/prague.jpg">
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

.wrapper-big   {
  background-color: #211642 !important;
}

#profile-pic {
  border-radius: 10px;
}

.upper {
  margin-top: 5%;
  width: 50%;
  height: auto;
  color: white;
  margin-left: auto;
  margin-right: auto;
}

#align-btm {
  position: absolute;
  bottom: 0;
}

.relative {
  position: relative;
}

.low {
  margin-top: 3%;
}

.low img {
  width: 100%;
}

.low .row {
  margin-top: 3%;
}

</style>

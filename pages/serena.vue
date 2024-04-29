<template>
  <div class="wrapper">
    <navbar />
    <div class="flex-container">
      <div class="row outer">
        <div class="col-9">
          <h1>Serena :D</h1>
          <div class="row">
            <div class="col-6 about-me">
              <h3>About Me!</h3>
              <p>Hi! I'm Serena, as you guys probably already know. I'm one of the Tech Co-Directors and I was on 
                Tech team last year. I'm a sophomore majoring in Computer Science and Mathematics. I'm also pursuing 
                a minor in Classical Mythology. I code sometimes, but I also like to art and sometimes tennis. I read
                when I have the chance but now I'm more of a gamer.
              </p>
            </div>
            <div class="col-5">
              <div class="fun-facts">
                <h3>Fun Facts!</h3>
                <li v-for="fact in funfacts">
                    {{ fact }}
                </li>
              </div>
            </div>
          </div>
          <div class="row truths">
          <h3>Two Truths and A Lie</h3>
          <p>(find the lie)</p>
            <div class="col-9">
              <p>I live an hour away from Disney World</p>
              <p>My neighborhood has a reserved area because bald eagles live there</p>
              <p>I'm a League of Legends player</p>
            </div>
            <div class="col-3">
              <div class="row btn">
                <button class="rounded-pill" @click="addTwo(true)">Check</button>
              </div>
              <div class="row btn">
                <button class="rounded-pill" @click="addTwo(true)">Check</button>
              </div>
              <div class="row btn">
                <button class="rounded-pill" @click="addTwo(false)">Check</button>
              </div>
            </div>

          </div>
        </div>
        <div class="col">
          <img class = "img" src="/public/serena.jpg">
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

.outer {
  margin-top:1rem;
}

.btn {
  width: 100%;

}

.about-me {
  margin:2rem;
  padding:2rem;
  radius: 10px;
  background: rgb(244, 241, 235);
  color:black;
  border-radius: 20px;
  height:100%;
}

.about-me p {
  color:black;
}

.wrapper {
  background: rgb(186, 172, 162);
  width: 100%;
  min-height: 100vh;
}

.flex-container {
  margin-left: 3rem;
  margin-right: 3rem;
  color: white;
}

.img {
  width:100%;
  border: 10px;
  border-color:rgb(244, 241, 235);
  border-radius: 20px;
  border: 5px solid;
}
</style>

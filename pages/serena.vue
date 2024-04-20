<template>
  <div class="wrapper">
    <navbar />
    <div class="flex-container">
      <div class="row">
        <div class="col-4">
          <div class="fun-facts">
            <h3>Fun Facts!</h3>
            <li v-for="fact in funfacts">
                {{ fact }}
            </li>
          </div>
          
            <h3>Two Truths and A Lie</h3>
        </div>
        <div class="col-5 about-me">
          <h1>About Me!</h1>
          <p>Hi! I'm Serena, as you guys probably already know. I'm one of the Tech Co-Directors and I was on 
            Tech team last year. I'm a sophomore majoring in Computer Science and Mathematics. I'm also pursuing 
            a minor in Classical Mythology. I code sometimes, but I also like to art and sometimes tennis. I read
            when I have the chance but now I'm more of a gamer 😔
          </p>
        </div>
        <div class="col">
          <img class = "img" src="serena.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{pic: string}>()
const funfacts = ref(["I'm in Club Tennis and Gymnastics", "I'm a fiend for boba", "I've been to China a few times", "I'm from Florida (we do have an aligator in our back yard)", "My favorite color is green"])

let picture = ref(props.pic)
</script>


<style scoped>

.fun-facts {
  padding:2rem;
  radius: 10px;
  background: rgb(244, 241, 235);
  color:black;
  border-radius: 20px;
  height:100%;
}

.h3 {
  
}

.wrapper {
  background: rgb(2, 56, 2);
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
  border-color:white;
}
</style>

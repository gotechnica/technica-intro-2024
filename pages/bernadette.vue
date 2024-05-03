<template>
  <div class="wrapper">
    <navbar />
    <div class="flex-container">
      <div class="row outer">
        <div class="col-9">
          <h1> Bernadette :)</h1>
          <div class="row">
            <div class="col-6 about-me">
              <h3>About Me</h3>
              <p>Hi everyone! My name is Bernadette Agbeme (she/her)💜 
                I'm a junior studying Information Science ℹ️ and minoring in Technology Entrepreneurship & Corporate Innovation 💡
              </p>
            </div>
          </div>
        </div>
          <div class="row">
            <div class="col-6 fun-facts">
              <h3>Fun Facts</h3>
              <ul>
                <li>I enjoy games (all kinds of video games, arcade games, card games, etc.)🎮</li>
                <li>I like spending time with family</li>
                <li>I'm left-handed🫲</li>
              </ul>
            </div>
            <div class="col-6">
              <img class="pic" src="/public/Bernadette!.jpg" alt="Bernadette's Picture">
            </div>
          </div>
          <div class="col-7">
            <button class="btn" @click="showGift">Click here for a gift :)</button>
            <img v-if="showGif" class="gif" src="/public/gift!.gif" alt="Bernadette's Gift">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showGif: false
    };
  },
  methods: {
    showGift() {
      this.showGif = !this.showGif;
    }
  }
}
</script>

<style scoped>
.col-7 {
  margin: 50px auto;
  text-align: center;
}

.btn {
  width: 200px;
  padding: 10px;
  background-color: rgb(151, 0, 238);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 10px;
}

.gif {
  width: 850px;
  position: fixed;
  top: 50px;
  left: 340px;
}

.btn {
  width: 25%;

}

.about-me {
  margin:2rem;
  padding:2rem;
  padding: 10px;
  background: rgb(244, 241, 235);
  color:black;
  border-radius: 20px;
  height:100%;
}

.fun-facts {
  margin:2rem;
  padding:1rem;
  padding: 10px;
  background: rgb(244, 241, 235);
  color:black;
  border-radius: 20px;
  height:70%;
}
.wrapper {
  background: rgb(175, 162, 186);
  width: 100%;
  min-height: 100vh;
}

.flex-container {
  margin-left: 3rem;
  margin-right: 3rem;
  color: rgb(131, 0, 238);
}

.pic {
  width:50%;
  border: 10px;
  border-color:rgb(240, 235, 244);
  border-radius: 20px;
  border: 5px solid;
  margin-top: -810px;
  margin-left: 999px;
}
</style>
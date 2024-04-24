<template>

  <div class="wrapperNav">
    <navbar />
  </div>
  
  <div class="wrapperBody">
    <div class="flex-container">
      <div class="row">
        <!-- Column 1 -->
        <div class="col-sm-4 d-flex justify-content-center position-relative">
          <img class="img" src="/public/matthew.png" @click="toggleText">
        </div>

        <!-- Column 2 -->
        <div class="col-sm-4">
          <div>
            <!-- Use computed property to display formatted text -->
            <template v-if="textToShow === 'Initial Text'">
              <strong>{{ textToShow }}</strong>
            </template>
            <template v-else>
              <span v-html="textToShow"></span>
            </template>
          </div>
        </div>

        <!-- Column 3 -->
        <div class="col-sm-4">
          I got really lazy here...
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textIndex: 0,
      texts: [
        "<h1>Click the image on the left to see some fun facts about me!</h1>",

        `
        <h1 style="font-size: 36px;">Stuff I'm currently reading:</h1>
        <ul style="font-size: 24px;">
          <li>Dune Messiah (Dune) - Frank Herbert (1969)</li>
          <li>Thinking, Fast and Slow - Daniel Kahneman (2011)</li>
          <li>Death's End (Remembrance of Earth's Past) - Liu Cixin (2010)</li>
        </ul>
        `,

        `
        <h1 style="font-size: 36px;">Fun Facts!</h1>
        <ul style="font-size: 24px;">
          <li>I have an unhealthy obsession with Squishmallows (I have a corner of my room dedicated to them)</li>
          <li>I'm a chalk enthusiast (but haven't had time to climb recently T~T)</li>
          <li>I play a bunch of various competitive games (L**gue, Ov***atch, Fort**e, ++)</li>
          <li>I have a triple-PC setup sitting in my dorm right now for impromptu LAN parties</li>
        </ul>
        `],
      initialClick: false // Boolean to track initial click
    };
  },
  computed: {
    textToShow() {
      return this.texts[this.textIndex];
    }
  },
  methods: {
    toggleText() {
      if (!this.initialClick) {
        // If initial click, replace with Text 1
        this.texts[this.textIndex] = `
          <h1 style="font-size: 36px;">Favorite Webnovels:</h1>
          <ul style="font-size: 24px;">
            <li>The King's Avatar</li>
            <li>Mother of Learning</li>
            <li>Reverend Insanity</li>
            <li>The First Order</li>
            <li>Overlord</li>
          </ul>
          <p>(in no particular order)</p>
          `;
        this.initialClick = true; // Set initialClick to true
      } else {
        // Otherwise, cycle through the texts normally
        this.textIndex = (this.textIndex + 1) % this.texts.length;
      }
    }
  }
}
</script>

<style scoped>

/* background-color: linear-gradient(to right, #2ae9f1, #fb7dad); */



.wrapperBody {
  background: #ffb3c3;
  height: 94vh;
}

.flex-container {
  color: white;
}

.img {
  width: 80%;
  border-radius: 50%;
  border: 5px;
  border-style: solid;
  border-color: #130f1f;
  transform: translateY(10%);
  cursor: pointer;
}

</style>
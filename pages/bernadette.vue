<template>
    <div class="wrapper">
      <navbar />
  
      <div class="flex-container">
        <div class="row">
          <div class="col-md-6">
            <h1>{{ yourName }}</h1>
            <img class="profile-picture" src="/public/Bernadette-Headshot-2024.jpg" alt="My Picture">
  
            <p>{{ introduction }}</p>
  
            <button @click="showMoreInfo">More Info</button>
  
            <div v-if="moreInfoVisible">
              <h2>Additional Information</h2>
              <!-- Additional details about me -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        yourName: "Bernadette :)",
        introduction: "I'm a Junior, I major in Info-Sci and minor in Tech Entreprenuership/Corporate Innovating. I like games!",
        moreInfoVisible: false
      };
    },
    methods: {
      showMoreInfo() {
        this.moreInfoVisible = !this.moreInfoVisible;
      }
    }
  };
  </script>
  
  <style scoped>
  .wrapper {
    background: #211642;
    width: 100%;
    min-height: 100vh;
  }
  .profile-picture {
    width: 200px;
    border-radius: 50%;
  }
  </style>
  
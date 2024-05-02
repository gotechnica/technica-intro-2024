<template>
    <div>
      <!-- Nav Bar-->
      <nav class="nav-bar">
        <ul>
          <li><router-link to="/">Home</router-link></li>
        </ul>
      </nav>
      <!-- Main Content -->
      <div class="container">
        <h1>{{ name }}'s Introduction Page</h1>
        <div class="row">
          <div class="col-md-4">
            <img :src="imageSrc" alt="That's me!" class="profile_image">
          </div>
          <div class="col-md-8">
            <div class="about-me-section">
              <h2 class="about-me-heading">☁️About Me☁️</h2>
              <p class="about-me-description">{{ bio }}</p>
            </div>
            <div class="button-container">
              <button @click="scrollToFunFacts"> Scroll to Fun Facts</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Fun Facts Section -->
      <div id="fun-facts-section" class="fun-facts-section">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="fun-facts">
                <h2 class="fun-facts-heading">Fun Facts</h2>
                <ul class="fun-facts-list">
                  <li v-for="(fact, index) in funFacts" :key="index">{{ fact }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>  
  
  <script>
  import alexas_photo from '../assets/alexas_photo.jpg';
  
  export default {
    data() {
      return {
        imageSrc: alexas_photo,
        name: "Alexa",
        funFacts: [
          "I love the movie Ratatouille... 🐀🍲",
          "I'm from New York!  🗽",
          "I have one dog. 🐶",
          "Timothée Chalamet and Nicki Minaj went to my highschool.  🎓"
        ],
        bio: `Hello! I'm Alexa and I'm currently a freshman majoring in Information Science. 
        Some things that I love include: trying out new foods, shopping, and listening to music. 
        I'm still relatively new at coding, but I'm trying my best to learn more!
        And if I had to pick sour, spicy, sweet, or salty, I would choose spicy!` 
      };
    },

    methods: {
        scrollToFunFacts() {
            console.log("Button clicked!");
            const funFactsSection=document.getElementById('fun-facts-section');
            if (funFactsSection) {
                funFactsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }
};
</script>
  
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Times+New+Roman&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Cambria+Math&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'); 
  
  .nav-bar {
    background-color: pink;
    padding: 10px;
    border-bottom:2px solid white;
  }

  .button-container {
    margin-top: 20px;
    font-size: 30px;
    display: flex;
    justify-content: center;
  }

  .scroll-button {
    padding: 10px 20px;
    background-color: pink;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .profile_image {
    max-width: 400px;
    max-height: 400px;
    width: auto;
    height: auto; 
    border: 5px solid pink;
  }

  .about-me-heading {
    font-size: 48px;
    font-weight: bold;
    font-family: 'Cambria Math', serif;
    color: pink;
    text-align: center;
  }
  
  .about-me-description {
    font-family: 'Times New Roman', serif;
    font-size: 24px;
    color: pink;
    text-align:center; 
  }
  
  .fun-facts-heading {
    background-color: pink;
    padding: 20px;
    border-radius: 10px;
    margin-left: 100px;
    margin-right: 100px;
    font-size: 48px;
    font-weight: bold;
    font-family: 'Cambria Math', serif;
    color: white;
    text-align: center;
    margin-top: 300px;
    margin-bottom: 10px;
    text-decoration: underline; 
  }
  
  .fun-facts-list {
    background-color: pink;
    padding: 20px;
    border-radius: 10px;
    margin-left: 100px;
    margin-right: 100px;
    font-family: 'Times New Roman', serif;
    font-size: 38px;
    color: white;
    font-weight: bold;
    text-align: center;
    margin-top: 15px; /* Add some spacing */
    list-style-type: none;
  }

  .container h1{
    font-size: 100px;
    font-family: 'Times New Roman', Times, serif;
    text-decoration: underline;
    color: pink;
    text-align: center;
    margin-top: 50px;
    margin-bottom:50px;
  }
  </style>
  
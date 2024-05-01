<template>
    <div>
        <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src="https://placehold.it/100x30" alt="Logo">
          <span>{{ name }}'s Introduction Page</span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="#">Home</a>
          <a class="navbar-item" href="#">About</a>
             <!-- Add more navbar items as needed -->
        </div>
      </div>
    </nav>

        <!-- Main Content -->
        <div class="wrapper">
            <h1>{{ name }}'s Introduction Page</h1>
            <img :src=" 'https://drive.google.com/uc?export=download&id=1VtzePNqdCxvkmsKmgiq_znCoaMuqTqzH' " alt="That's me!">
            <div>
                <h2>Fun Facts About Me:</h2>
                <ul>
                    <li v-for ="(fact, index) in funFacts" :key="index">{{fact}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "Alexa",
            funFacts: [
                "I love the movie Ratatouille...",
                "I'm from New York!",
                "I have one dog."
            ],
            bio: "Hi! I'm Alexa and I'm currently a Freshman Information Science major. I really love to try out new foods, learn new recipes, and listen to music."
        };
    }
}; 
</script>

        
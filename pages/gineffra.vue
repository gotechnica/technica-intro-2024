<!--     
mssgs: ["I'm currently a senior, majoring in CS.", 
        "As you probably know I am also going to be working on Tech Team this summer", 
        "Other than that, I love puzzles, math, building things, and hiking!"],
-->

<script type="module">
 export default {
    data() {
        return {
            plain: false,
            
            messages: ["I'm currently a senior, majoring in CS.",
                        "As you probably know, I am also going to be working on Tech Team this summer :)",
                        "Other than that, I love puzzles, math, building things, and hiking!"],
        };
    },
    computed: {
        displayMssg() {
        return this.plain ? this.messages : this.messages.map(mssg => mssg.split('').reverse().join(''));
        },
        btnText() {
        return this.plain ? "Encode" : "edoceD";
        }
        },
        
    methods: {
        toggleMssg(plain) {
            this.plain = !this.plain;
        }
    },
 };

</script>
<template>
    <div class="wrapper">
        <navbar />
        <div class="flex-container">
            <div class="header">
                <h1>Gineffra</h1>
            </div>
            <div class="about-me col">
                <img class="img" src="public/gineffra.jpg">

                <div class="card col-5">
                    <h4 class="card-header">A little about me:</h4>
                    <p class="card-text">
                        <ul>
                            <li v-for="mssg in displayMssg">
                                {{ mssg }}
                            </li>
                        </ul>
                </p>
                <button @click="toggleMssg" class="btn btn-outline-primary align-self-end">
                    {{ btnText }}
                </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    background: #1e153c;
    width: 100%;
    min-height: 100vh;
}

.flex-container {
    color: black;
}

.header {
    text-align: center;
    margin: 2rem;
    color: pink;
}

.about-me {
    display: flex;
    align-items: flex-end;
    padding-left: 5rem;
}

.card-header {
    background-color: floralwhite;
    text-align: center;
}

.card-text {
    text-align: center;
    color: black
}

.img {
  max-width: 25%;
  border-radius: 25px;
  padding-right: 5rem;
}
</style>

<template>
    <navbar />
    <h1 class = "typing">Hello, world! My name is Valentina and I'm excited to meet everyone :D</h1><br>
    <div class = "row">
        <div class="column">
            <div class="card">
                <img src="/public/valentina_left.png" class="center">
                <div>
                    <p>a photo of me</p>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="card">
                <img src="/public/valentina_center.png" class="center">
                <div>
                    <p>another photo of me</p>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="card">
                <img src="/public/valentina_right.png" class="center">
                <div>
                    <p>another another photo of me</p>
                </div>
            </div>
        </div>
    </div>
    <br>
    <button class = "button" @click="this.exists = !this.exists">{{btnText}}</button><br>
    <Transition>
        <h1 class="center" v-if="exists">I am a Computer Science major and Computational Finance minor at UMD, and I'm super hyped to be on the Tech Team this year!</h1>
    </Transition>
    <Transition>
        <h3 class="center" v-if="exists">A few fun facts about me:</h3>
    </Transition>
    <Transition>
    <ul class="center" v-if="exists">
        <li>This is my first time using Vue (and it shows)</li>
        <li>I am the world's #1 little sweet treat enjoyer</li>
        <li>I was lactose intolerant and then I drank so much bubble tea in college that I'm not anymore</li>
        <li>I lived in China for 3 years!</li>
        <li>My favorite color is green <33</li>
    </ul>
  </Transition>
</template>

<script>
export default {
    data() {
        return {
            exists: false
        }
    },
    computed: {
        btnText() {
            if(this.exists) {
                return 'Now click me again!';
            }
            else {
                return 'Click me!';
            }
        }
    }
}
</script>

<style>
    p {
        display: inline-block;
        padding: 10px;
        text-align: center;
        transition: all 0.5s;
        white-space: nowrap;
    }

    h1 {
        text-align: center;
    }

    h3 {
        text-align: center;
    }

    ul {
        text-align: center;
    }

    img {
        border-radius: 5px 5px 0 0;
        height: 100%;
        width: 100%;
        padding: 10px; 
    }

    .typing {
        animation: typing 5s forwards;
        border-right: 2px solid white;
        font-size: 50px;
        overflow: hidden;
        text-align: center;
        white-space: nowrap;
        width: 0;
    }

    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    .v-enter-from {
        opacity: 0;
        translate: -100px 0;
    }
    
    .v-enter-to {
        opacity: 1;
        translate: 0 0;
    }

    .v-leave-from {
        opacity: 1;
        translate: 0 0;
    }

    .v-leave-to {
        opacity: 0;
        translate: 100px 0;
    }

    .button {
        background-color: white; 
        border: 2px solid #555555;
        color: black; 
        width: 100%;
    }

    .button:hover {
        background-color: #555555;
        color: white;
        width: 100%;
    }

    .card {
        background-color: #f1f1f1;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        display: block;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        position: relative;
    }

    .card div {
        background: #D3D3D3;
        bottom: 0;
        color: black;
        display: block;
        margin-bottom: 5px;
        opacity: 0;
        position: absolute;
        right: 0; 
        -webkit-transition: visibility 0s, opacity 0.5s linear; 
        transition: visibility 0s, opacity 0.5s linear;
        visibility: hidden;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        cursor: pointer;
        display: block;
        max-width: fit-content;
    }

    .card:hover div {
        display: block;
        opacity: 1; 
        visibility: visible;
        max-width: fit-content;
    }

    .column {
        margin-left: auto;
        margin-right: auto;
        width: 25%;
    }
</style>
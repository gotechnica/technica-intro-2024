<template>

    <div class="wrapperBody">
        <div class="wrapperNav">
            <navbar />
        </div>
        <div class="flex-container">

            <div class="row my-4">
                <div class="col-12 text-center">
                    <img :src="profileImage" class="rounded-circle" width="333" height="333">
                    <h1>{{ salute }}</h1>
                    <p>{{ ifYouCanSeeThisYouKnowIPlayLeagueSoYouShouldPlayWithMe }}</p>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-sm">
                    <button :class="{ 'btn':true, 'rounded-pill': true, 'border-danger': show, 'border-success': !show }" @click="toggleButton('sean_images/wushu.jpg')">
                        {{ show ? '>:(' : 'Secret' }}
                    </button>
                </div>
                <div class="col-sm">
                    <button :class="{ 'btn':true, 'rounded-pill': true, 'border-danger': show, 'border-success': !show }" @click="toggleButton('sean_images/keeb.jpg')">
                        {{ show ? 'No' : 'Stuff' }}
                    </button>
                </div>
                <div class="col-sm">
                    <button :class="{ 'btn':true, 'rounded-pill': true, 'border-danger': show, 'border-success': !show }" @click="toggleButton('sean_images/room.jpg')">
                        {{ show ? 'Peeking' : ':3' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                profileImage: "sean_images/sean.jpg",
                salute: "Heyo, I'm Me!",
                ifYouCanSeeThisYouKnowIPlayLeagueSoYouShouldPlayWithMe: "(╯°Д°）╯︵ /(.□ . \\)"
            }
        },
        methods: {
            toggleButton(imagePath) {
                this.show = !this.show;
                this.profileImage = this.show ? imagePath : "sean_images/sean.jpg";
                this.salute = this.show ? "(>._.)>" : "Heyo, I'm Me!";
                
                if (!this.show) {
                    this.ifYouCanSeeThisYouKnowIPlayLeagueSoYouShouldPlayWithMe = "(╯°Д°）╯︵ /(.□ . \\)";
                } else {
                    switch(imagePath) {     // can replace with map at some point
                        case 'sean_images/wushu.jpg':
                            this.ifYouCanSeeThisYouKnowIPlayLeagueSoYouShouldPlayWithMe = "I practice a Chinese martial art called Wushu, specializing in Barehand, Staff, and Double Chain Whips!";
                            break;
                        case 'sean_images/keeb.jpg':
                            this.ifYouCanSeeThisYouKnowIPlayLeagueSoYouShouldPlayWithMe = "I am a mechanical keyboard and custom-built PC enthusiast! Anyone following the Neo Ergo and Osume?";
                            break;
                        case 'sean_images/room.jpg':
                            this.ifYouCanSeeThisYouKnowIPlayLeagueSoYouShouldPlayWithMe = "I love escape rooms (and puzzles in general), so if you don't have claustrophobia, hit me up during break!";
                            break;
                        default:
                            this.ifYouCanSeeThisYouKnowIPlayLeagueSoYouShouldPlayWithMe = "(╯°Д°）╯︵ /(.□ . \\)";
                    }
                }
            }
        }
    }
</script>

<style>
    #navbar {
        margin: 0;
        padding: 0;
        width: 100vw;
    }
    .wrapperBody {
        text-align: center;
        background-color: #DCD0FF;
        margin-top: 60px;
        height: 100vh;
    }
    img {
        border: 5px solid #aaf0d1;
        object-fit: cover;
    }
    h1, h2, p {
        color: #001f3d;
    }
    .btn {
        width: 50%;
        height: 100%;
        font-size: 150%;
        color: black;
        background-color: #89CFF0;
        border-width: thick;
    }
    .col-sm {
        margin-top: 5%;
    }
</style>
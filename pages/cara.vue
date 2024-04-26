<script>
export default {
    methods: {
        updateOpacity1() {
            console.log("Clicked image 1");
            const hoverText = document.getElementById('hover-text1');
            const hoverImage = document.getElementById('hover-image1');

            hoverText.style.opacity = hoverText.style.opacity == '1' ? '0' : '1';
        },

        updateOpacity2() {
            const hoverText = document.getElementById('hover-text2');
            const hoverImage = document.getElementById('hover-image2');

            hoverText.style.opacity = hoverText.style.opacity == '1' ? '0' : '1';
        },

        updateOpacity3() {
            const hoverText = document.getElementById('hover-text3');
            const hoverImage = document.getElementById('hover-image3');

            hoverText.style.opacity = hoverText.style.opacity == '1' ? '0' : '1';
        }
    }
}
</script>

<template>
    <div class="wrapper">
        <navbar />

        <div class="container">
            <div class="image-container">
                <img src="public/cara_images/caraprofile.jpg" alt="Image" class="rounded-image" />
            </div>
            <div class="content">
                <h1>cara!</h1>
                <p>my name is cara murphy and I'm a sophmore computer science and immersive media design double
                    major.<br>
                    click the images below to learn more about me!
                </p>
            </div>
            <div class="centered-images">

                <div class="image-wrapper" v-on:click="updateOpacity1">
                    <img src="public/cara_images/caracafe.jpg" alt="Image 1" id="hover-image1" />
                    <div id="hover-text1">I like going to try new coffee shops every monday with eileen!</div>
                </div>
                <div class="image-wrapper" v-on:click="updateOpacity2">
                    <img src="public/cara_images/caratravel.jpg" alt="Image 2" id="hover-image2" />
                    <div id="hover-text2">I have been to 8 countries!</div>
                </div>
                <div class="image-wrapper" v-on:click="updateOpacity3">
                    <img src="public/cara_images/caraart.jpg" alt="Image 3" id="hover-image3" />
                    <div id="hover-text3">I'm an artist and I love to draw and paint. This is one of my artt100
                        project's.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.wrapper {
    width: 100vw;
    height: 100vh;
    background: rgb(14, 25, 51);
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image-container {
    border-radius: 50%;
    overflow: hidden;
    width: 300px;
    height: 300px;
}

.rounded-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content {
    text-align: center;
    margin-top: 15px;
}

.centered-images {
    display: flex;
    justify-content: center;
    margin-top: 15px;
}

.image-wrapper {
    position: relative;
    margin: 5px 15px;

}

h1 {
    color: white;
}

p {
    color: white;
}

#hover-image1 {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 1rem;
    border-style: solid;
    border-width: 0.2rem;
    border-color: white;
}

#hover-image2 {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 1rem;
    border-style: solid;
    border-width: 0.2rem;
    border-color: white;
}

#hover-image3 {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 1rem;
    border-style: solid;
    border-width: 0.2rem;
    border-color: white;
}

#hover-text1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgb(14, 25, 51);
    color: white;
    padding: 25px;
    font-size: 15px;
    opacity: 0;
    transition: opacity 0.3s;
}

#hover-text2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgb(14, 25, 51);
    color: white;
    padding: 25px;
    font-size: 15px;
    opacity: 0;
    transition: opacity 0.3s;
}

#hover-text3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgb(14, 25, 51);
    color: white;
    padding: 25px;
    font-size: 15px;
    opacity: 0;
    transition: opacity 0.3s;
}




/* .image-wrapper:hover .hover-text {
    opacity: 1;
} */
</style>
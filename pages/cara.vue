<template>
    <navbar />

    <div class="container">
        <div class="image-container">
            <img src="public/cara_images/caraprofile.jpg" alt="Image" class="rounded-image" />
        </div>
        <div class="content">
            <h1>cara!</h1>
            <p>lorem ipsum</p>
        </div>
        <div class="centered-images">
            <div class="image-wrapper">
                <img src="public/cara_images/caracafe.jpg" alt="Image 1" class="hover-image" />
                <div class="hover-text">Text 1</div>
            </div>
            <div class="image-wrapper">
                <img src="public/cara_images/caratravel.jpg" alt="Image 2" class="hover-image" />
                <div class="hover-text">Text 2</div>
            </div>
            <div class="image-wrapper">
                <img src="public/cara_images/caraart.jpg" alt="Image 3" class="hover-image" />
                <div class="hover-text">Text 3</div>
            </div>
        </div>
    </div>
</template>

<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image-container {
    border-radius: 50%;
    overflow: hidden;
    width: 200px;
    height: 200px;
}

.rounded-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content {
    text-align: center;
    margin-top: 20px;
}

.centered-images {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.image-wrapper {
    position: relative;
    margin: 0 10px;
}

.hover-image {
    width: 200px;
    height: 200px;
    object-fit: cover;
}

.hover-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 10px;
    opacity: 0;
    transition: opacity 0.3s;
}

.image-wrapper:hover .hover-text {
    opacity: 1;
}
</style>
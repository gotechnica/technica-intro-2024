<template>
  <div class="wrapper">
    <navbar />

    <div class="outer">
      <div class="flex-container">
        <div class="about-me">
          <h1>Eileen</h1>
          <p class="description">
            Hi! I'm Eileen, and I'm a sophomore double majoring in computer
            science and math. I'm super excited to be working with you guys this
            season!
          </p>
          <div class="row">
            <div class="col-md-6">
                <div class="fact-information">

                
              <h2>Facts</h2>
              <div class="fact-card-container">
                <div class="fact-card">
                  <div class="front">
                    <span>Fact 1</span>
                  </div>
                  <div class="back">
                    <p>
                      I play volleyball (and got second at nationals this year!)
                    </p>
                  </div>
                </div>
                <div class="fact-card">
                  <div class="front">
                    <span>Fact 2</span>
                  </div>
                  <div class="back">
                    <p>
                      I like rollerskating, walking by lakes, rock climbing,
                      hiking and going camping
                    </p>
                  </div>
                </div>
                <div class="fact-card">
                  <div class="front">
                    <span>Fact 3</span>
                  </div>
                  <div class="back">
                    <p>
                      I love discovering new cafes and trying different types of
                      lattes (with Cara!)
                    </p>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="profile-picture">
                <img src="/public/eileen.jpeg" alt="Eileen's Picture" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.wrapper {
  background-color: lavender;
  min-height: 100vh;
}

.fact-information {
    margin-top: 7rem;
}

.flex-container {
  display: flex;
  justify-content: center;
}

.about-me {
  text-align: center;
  margin-top: 50px;
}

.description {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.fact-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.fact-card {
  width: 200px;
  height: 200px;
  margin: 10px;
  perspective: 1000px;
}

.fact-card:hover .front {
  transform: rotateY(180deg);
}

.fact-card:hover .back {
  transform: rotateY(0deg);
}

.front,
.back {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: transform 0.5s;
  backface-visibility: hidden;
}

.front {
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}

.back {
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
  padding: 10px;
}

.profile-picture img {
  width: 60%; 
  height: 60%; 
  margin-top: 20px; 
  border-style: ridge;
}
</style>

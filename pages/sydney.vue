<template>
    <div class="wrapper">
      <navbar />
      <center><img src="https://fontmeme.com/permalink/240502/50b8202204d7f884821c388760826f7d.png" class="inside-out-font" border="0"></center>
      <center><img src="https://fontmeme.com/permalink/240502/6fa1b05f2410c763612980be1f9713bd.png" class="inside-out-font2" border="0"></center>
        <div class="orb-container">
          <!-- First Orb -->
          <div class="orb" @click="showPopup1 = true">
            <div class="reflection"></div>
            <div class="inner-glow"></div>
            <div class="outer-shadow"></div>
            <div class="orb-content"></div>
            <div class="orb-content" :style="{ backgroundImage: 'url(' + orb1Image + ')' }"></div>
          </div>
  
          <!-- Second Orb -->
          <div class="orb" @click="showPopup2 = true" >
            <div class="reflection"></div>
            <div class="inner-glow"></div>
            <div class="outer-shadow"></div>
            <div class="orb-content" :style="{ backgroundImage: 'url(' + orb2Image + ')' }"></div>
          </div>

               <!-- Fifth Orb -->
        <div class="orb-Purple" @click="showPopup5 = true" >
            <div class="reflection-Purple"></div>
            <div class="inner-glow-Purple"></div>
            <div class="outer-shadow-Purple"></div>
            <div class="orb-content-Purple" :style="{ backgroundImage: 'url(' + orb5Image + ')' }"></div>
          </div>

        <!-- Third Orb -->
        <div class="orb" @click="showPopup3 = true" >
            <div class="reflection"></div>
            <div class="inner-glow"></div>
            <div class="outer-shadow"></div>
            <div class="orb-content" :style="{ backgroundImage: 'url(' + orb3Image + ')' }"></div>
          </div>

                  <!-- Sixth Orb -->
        <div class="orb-Blue" @click="showPopup6 = true" >
            <div class="reflection-Blue"></div>
            <div class="inner-glow-Blue"></div>
            <div class="outer-shadow-Blue"></div>
            <div class="orb-content-Blue" :style="{ backgroundImage: 'url(' + orb6Image + ')' }"></div>
          </div>
          
        <!-- Fourth Orb -->
        <div class="orb" @click="showPopup4 = true" >
            <div class="reflection"></div>
            <div class="inner-glow"></div>
            <div class="outer-shadow"></div>
            <div class="orb-content" :style="{ backgroundImage: 'url(' + orb4Image + ')' }"></div>
          </div>

                <!-- 7th Orb -->
        <div class="orb" @click="showPopup7 = true" >
            <div class="reflection"></div>
            <div class="inner-glow"></div>
            <div class="outer-shadow"></div>
            <div class="orb-content" :style="{ backgroundImage: 'url(' + orb7Image + ')' }"></div>
          </div>
          </div>
  
        <!-- First Popup -->
        <div v-if="showPopup1" class="popup">
          <div class="popup-content">
            <span class="close-btn" @click="showPopup1 = false">&times;</span>
            <p>This is a photo of my mom and I running our first half marathon. I
              was initially training with my boyfriend (we broke up -> jk he got injured).
              Then, my mom took his place last minute and it was special to be able
              to share that with her.</p>
          </div>
        </div>
  
        <!-- Second Popup -->
        <div v-if="showPopup2" class="popup">
          <div class="popup-content">
            <span class="close-btn" @click="showPopup2 = false">&times;</span>
            <p>This is a photo of me and my best friend Sarah walking from the top of Manhattan
              to the bottom. I knew she was a real friend because
              we had to be with eachother for every second of that walk.
              I initially convinced myself and my parents that I would be done in
              4 hours but it ended up taking the entire day lol.</p>
          </div>
        </div>

        <!-- Third Popup -->
        <div v-if="showPopup3" class="popup">
          <div class="popup-content">
            <span class="close-btn" @click="showPopup3 = false">&times;</span>
            <p>This is the day I found out that I passed my drivers test. I literally thought
                I failed so hard that I booked my makeup drivers test without even finding
                out if I passed it or not.
            </p>
          </div>
        </div>

        <!-- Fourth Popup -->
        <div v-if="showPopup4" class="popup">
          <div class="popup-content">
            <span class="close-btn" @click="showPopup4 = false">&times;</span>
            <p>This is a photo of me flying to Ohio and suprising Sarah on her birthday.
                She acted pretty suprise but she also had a gut feeling when I
                shut my location off out of nowhere.
            </p>
          </div>
        </div>

            <!-- PURPLE Fifth Popup -->
            <div v-if="showPopup5" class="popup">
          <div class="popup-content">
            <span class="close-btn" @click="showPopup5 = false">&times;</span>
            <p>I was hella scared when I got all the way up there so then I asked to come down
                but... I went back today and I'm getting a lot better at it and I wasn't as 
                afraid so this memory will hopfully be gold soon.
            </p>
          </div>
        </div>


            <!-- BLUE Sixth Popup -->
        <div v-if="showPopup6" class="popup">
          <div class="popup-content">
            <span class="close-btn" @click="showPopup6 = false">&times;</span>
            <p>This is a photo of me flying to Ohio and suprising Sarah on her birthday.</p>
          </div>
        </div>

        <!--  7th Popup -->
        <div v-if="showPopup7" class="popup">
          <div class="popup-content">
            <span class="close-btn" @click="showPopup7 = false">&times;</span>
            <p>My friends had joked about getting me a pet for my birthday
                and so I responded, "Alright but I want that shit exotic". So for my 18th
                birthday my friends got me a fish and I carried it around school
                for the whole day.</p>
          </div>
        </div>
    </div>
    <!-- <img src="bingbong.png" class="bing"> -->
  </template>
  
  <script>
    export default {
      data() {
        return {
          showPopup1: false,
          showPopup2: false,
          showPopup3: false,
          showPopup4: false,
          showPopup5: false,
          showPopup6: false,
          showPopup7: false,
          orb1Image: 'momAndSydney.png',
          orb2Image: 'manhattanTrip.png',
          orb3Image: 'drivingTest.png',
          orb4Image: 'suprisingSarah.jpeg',
          orb5Image: 'rockclimbing.png',
          orb6Image: 'paintingClass.png',
          orb7Image: 'fish.png'
        };
      },
    };
  </script>
  
  <style>
.bing {
    height: 100px;
    width: 100px;
}
.inside-out-font {
    padding-top: 30px;
    padding-bottom: 10px;
}
.inside-out-font2 {
    padding-bottom: 80px;
}
/* Yellow */
  .orb {
    position: relative;
    width:200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(#fffb00, #f0f4cb);
    box-shadow: inset 0 0 10px rgba(225, 225, 225, 1),
      inset 0 0 20px rgba(225, 225, 225, 1),
      0 -75px 100px rgb(239, 243, 203);
  }
  .orb-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background-image: url('imageInsert');
    background-size: cover;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
    
  .orb:hover .orb-content {
    opacity: 0.35;
  }
  
  .orb .reflection {
    position: absolute;
    top: 15px;
    left:50px;
    width:100px;
    height: 65px;
    border-radius:50%;
    box-shadow: inset 0 10px 30px rgba(255, 255, 255, 1),
      inset 0 -10px 20px rgba(255, 251, 0);
  }
  .orb .inner-glow
  {
    position: absolute;
    bottom: 0;
    left:75px;
    width:50px;
    height:15px;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(225, 225, 225, 1),
      0 0 20px rgba(255, 255, 255, 1),
      0 0 30px rgba(255, 255, 255, 1),
      0 0 40px rgba(255, 255, 255, 1),
      0 0 50px rgba(255, 255, 255, 1);
    filter: blur(3px);
  }
  .orb .outer-shadow {
    position: absolute;
    bottom: -25px; 
    left: 50px; 
    width: 100px; 
    height: 50px;
    background: rgba (46,196,182, .8); 
    border-radius: 50%;
      box-shadow: 0 0 20px rgba(255, 251, 0),
      0 0 40px rgba(255, 251, 0),
      0 0 60px rgba(255, 251, 0),
      rgba(255, 251, 0),
      0 0 100px rgba(255, 251, 0),
      0 0 150px rgba(255, 251, 0);
    filter:blur(10px);
  }
  /* Purple Purple Purple Purple Purple -----------------------------------------------*/
  .orb-Purple .outer-shadow-Purple {
    position: absolute;
    bottom: -25px; 
    left: 50px; 
    width: 100px; 
    height: 50px;
    background: rgba (46,196,182, .8); 
    border-radius: 50%;
      box-shadow: 0 0 20px rgba(214, 50, 238),
      0 0 40px rgba(214, 50, 238),
      0 0 60pxrgba(214, 50, 238),
      rgba(214, 50, 238),
      0 0 100px rgba(214, 50, 238),
      0 0 150px rgba(214, 50, 238);
    filter:blur(10px);
  }

  .orb-Purple .reflection-Purple {
    position: absolute;
    top: 15px;
    left:50px;
    width:100px;
    height: 65px;
    border-radius:50%;
    box-shadow: inset 0 10px 30px rgba(255, 255, 255, 1),
      inset 0 -10px 20px rgba(214, 50, 238);
  }
  .orb-Purple {
    position: relative;
    width:200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(#d632ee, #f1cbf4);
    box-shadow: inset 0 0 10px rgba(225, 225, 225, 1),
      inset 0 0 20px rgba(225, 225, 225, 1),
      0 -75px 100px rgb(239, 243, 203);
  }

  .orb-Purple .inner-glow-Purple
  {
    position: absolute;
    bottom: 0;
    left:75px;
    width:50px;
    height:15px;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(225, 225, 225, 1),
      0 0 20px rgba(255, 255, 255, 1),
      0 0 30px rgba(255, 255, 255, 1),
      0 0 40px rgba(255, 255, 255, 1),
      0 0 50px rgba(255, 255, 255, 1);
    filter: blur(3px);
  }

  .orb-content-Purple {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background-image: url('imageInsert');
    background-size: cover;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
    
  .orb-Purple:hover .orb-content-Purple {
    opacity: 0.35;
  }
  

  /*BLUE BLUE BLUE BLUE BLUE ---------------------------------------------------*/

  /* Purple outer shadow */
  .orb-Blue .outer-shadow-Blue {
    position: absolute;
    bottom: -25px; 
    left: 50px; 
    width: 100px; 
    height: 50px;
    background: rgba (46,196,182, .8); 
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(46,196,182,1),
      0 0 40px rgba(46, 196, 182, 1),
      0 0 60px rgba(46, 196, 182, 1),
      rgba(46, 196, 182, 1),
      0 0 100px rgba(46, 196, 182, 1),
      0 0 150px rgba(46, 196, 182, 1);
    filter:blur(10px);
  }

  .orb-Blue .reflection-Blue {
    position: absolute;
    top: 15px;
    left:50px;
    width:100px;
    height: 65px;
    border-radius:50%;
    box-shadow: inset 0 10px 30px rgba(255, 255, 255, 1),
      inset 0 -10px 20px #2ec4b6;
  }

  .orb-Blue {
    position: relative;
    width:200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(#2ec4b6, #cbe6f4);
    box-shadow: inset 0 0 10px rgba(225, 225, 225, 1),
      inset 0 0 20px rgba(225, 225, 225, 1),
      0 -75px 100px rgb(239, 243, 203);
  }
  .orb-Blue .inner-glow-Blue
  {
    position: absolute;
    bottom: 0;
    left:75px;
    width:50px;
    height:15px;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(225, 225, 225, 1),
      0 0 20px rgba(255, 255, 255, 1),
      0 0 30px rgba(255, 255, 255, 1),
      0 0 40px rgba(255, 255, 255, 1),
      0 0 50px rgba(255, 255, 255, 1);
    filter: blur(3px);
  }

  .orb-content-Blue {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background-image: url('imageInsert');
    background-size: cover;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
    
  .orb-Blue:hover .orb-content-Blue {
    opacity: 0.35;
  }


    .wrapper {
        background-color: #FFB6C1;
        width: 100%;
        min-height: 100vh;
    }

    .orb-container {
        display: flex;
        justify-content: center;
        gap: 30px; /* Adjust the gap between orbs */
        flex-wrap: wrap; /* Wrap orbs onto multiple lines */
        max-width: 80%; /* Maximum width as a percentage to limit orbs per line */
        margin: auto; /* Center the container horizontally */
    }
.popup {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 30%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.popup-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  position: relative; /* Added position relative */
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
}
  </style>
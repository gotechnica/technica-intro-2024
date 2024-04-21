<template>

  <div class="wrapperNav">
    <navbar />
  </div>
  
  <div class="wrapperBody">
    <div class="flex-container">
      <div class="row">
        <div class="col-sm-4 d-flex align-items-center justify-content-center">
          <img class="img" src="matthew.png">
        </div>
        <div class="col-sm-4">
          Col2
        </div>
        <div class="col-sm-4">
          Col3
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

/* background-color: linear-gradient(to right, #2ae9f1, #fb7dad); */

.wrapperNav {
  background: #130F1F;
}

.wrapperBody {
  background: #ECBDE2;
  height: 94vh;
}

.flex-container {
  color: white;
}

.img {
  width: 80%;
  border-radius: 50%;
  border: 10px;
  border-style: solid;
  border-color: #ECBDE2;
}

</style>
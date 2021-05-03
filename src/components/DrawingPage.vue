<template>
<div id="container">
<div>
  <p>drawing place </p>
  <canvas id="c"> </canvas>
</div>
 <div>
    <button @click="drawRect">Add Rect</button>
    <button @click="subWidth">-</button>
    <button @click="addWidth">+</button>
  </div>
</div>
</template>

<script>
export default {
    data() {
      return{
    vueCanvas: null,
    rectWidth: 200
      }
  },
  mounted() {
  var c = document.getElementById("c");
  var ctx = c.getContext("2d");    
  this.vueCanvas = ctx;
  this.painting=false;
},
methods:{
 drawRect() {
      // clear canvas
      this.vueCanvas.clearRect(0, 0, 400, 200);
      
      // draw rect
      this.vueCanvas.beginPath();
      this.vueCanvas.rect(20, 20, this.rectWidth, 100);
      this.vueCanvas.stroke();      
    },
    addWidth() {
      this.rectWidth += 10
      this.drawRect()
    },
    subWidth() {
      this.rectWidth -= 10
      this.drawRect()      
    },
    startPosition(){
      this.painting=true
    },
    finishedPosition(){
      this.painting=false;
    }
}
}
</script>

<style>

*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

#c {
  height: 200px;
  width: 400px;
  border: 1px solid gray;
}

</style>
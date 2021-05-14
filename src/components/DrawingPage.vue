<template>
<div id="container">
<div id="canvas">
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

  c.addEventListener("mousedown",this.startPosition);
  c.addEventListener("mouseup",this.finishedPosition);
  c.addEventListener("mousemove",this.draw);
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
    },
    draw(e){
      if(!this.painting) return;
      this.vueCanvas.lineWidth=10;
      this.lineCap="round";
      this.vueCanvas.strokeStyle="red";

      this.vueCanvas.lineTo(e.clientX,e.clientY);
      this.vueCanvas.stroke();
      this.vueCanvas.beginPath();
      this.vueCanvas.moveTo(e.clientX,e.clientY);
      console.log(e.clientX)
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
  height: 700px;
  width: 700px;
  border: 1px solid gray;
   
}

#canvas{
  /* display: flex;
  justify-content: center; */
  margin-top:50px;
}

</style>
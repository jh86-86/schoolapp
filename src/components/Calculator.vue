<template>
  <div class="calculator">
    <!--top of calculator-->
    <div class="display">{{current || '0'}}</div> <!-- uses current from data() and defaults to zero if undefined-->
    <!--top buttons-->
    <div @click="clear" class="btn">C</div>    <!-- method of clear added-->
    <div @click="sign" class="btn">+/-</div>
    <div @click="percent" class="btn">%</div>
    <div @click="divide" class="btn operator">/</div>
    <!--top buttons-->
    <div @click="append('7')" class="btn">7</div>
    <div @click="append('8')" class="btn">8</div>
    <div @click="append('9')" class="btn">9</div>
    <div @click="multiply" class="btn operator">x</div>
    <!--middle  buttons-->
    <div @click="append('4')" class="btn">4</div>
    <div @click="append('5')" class="btn">5</div>
    <div @click="append('6')" class="btn">6</div>
    <div @click="subtract" class="btn operator">-</div>
    <!--middle 2nd buttons-->
    <div @click="append('1')" class="btn">1</div>
    <div @click="append('2')" class="btn">2</div>
    <div @click="append('3')" class="btn">3</div>
    <div @click="add" class="btn operator">+</div>
    <!--bottom buttons-->
    <div @click="append('0')" class="btn zero">0</div>  <!-- has two classes-->
    <div @click="dot()" class="btn">.</div>
    <div @click="equals" class="btn operator">=</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      current: '',
      operator:null,   //each method takes an operator that changes this
      previous:null,
      operatorClicked:false,
    }
  },

    methods: {    //adds functions
      clear(){
        this.current = "";     //resets current to empty string
      },
      sign(){
        this.current=this.current.charAt(0)==="-"? this.current.slice(1) : `-${this.current}`; //adds or removes minus from beginning
      },
      percent(){
        this.current= `${parseFloat(this.current)/100}`;//parseFloat converts it so a number first , do maths, then it becomes a string through interpolation
      },
      append(number){
        if(this.operatorClicked){
          this.current='';  //clear the terminal but previous variable is saved for the next number and clears string
          this.operatorClicked=false; //resets the click so more operations can be operands can be used
        }
        this.current = `${this.current}${number}`;
      },
      dot(){
        if(this.current.indexOf('.')===-1){ //wont append to front
          this.append('.');
        }
      },
      setPrevious(){
        this.previous= this.current; //set the previous or first number or a for the mathematical operations
        this.operatorClicked=true; //once click operator is set
      },
      add(){
        this.operator = (a,b)=> a+b;
        this.setPrevious();
        
      },
      subtract(){
        this.operator = (a,b)=> a-b;
        this.setPrevious();
      },
      multiply(){
        this.operator = (a,b)=> a*b;
        this.setPrevious();
      },
      divide(){
        this.operator = (a,b)=> a/b;
        this.setPrevious();
      },
      equals(){
        this.current= `${this.operator(
          parseFloat(this.current), 
          parseFloat(this.previous)
          )}`;
        this.previous=null; //resets previous so logically current is the sum previous is empty. If new number is used with operand it will then join the sum total again
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculator{
  width:500px;  /*size of calc */
  margin: 0 auto;  /*centers it horizontally*/
  font-size:40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /*four equal rows*/
  grid-auto-rows: minmax(50px, auto); /* rows will go on infinitely at 50px when added in calc div*/
  border:1px solid black ;
}

.display{
  grid-column: 1/5; /*will start at one and end at four from previous grid*/
  background-color:bisque;
  border:1px solid black ;
}

.zero{
  grid-column:1/3; /*should take two places */
}

.btn{
  background-color: lightgrey;
  border:1px solid black
}

.operator{
  background-color: lightcoral;
}

</style>

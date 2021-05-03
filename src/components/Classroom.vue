<template>
  <div id='classroom'>
      <div class='heading'>
         <h1>Classroom</h1>
      </div> 
     <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cYqmNO6gr2Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </div>   
     <div class="question">
         <form>
            <label for="fname">Enter story:</label><br>
                 <textarea id="w3review" name="w3review" rows="4" cols="50">
                  In the beginning......
                 </textarea>
            <input type="submit" value="Submit">
 
        </form>
     </div>    
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

}
</script>

<style>
#storyInput{
      height:200px;
    font-size:14pt;
}
</style>
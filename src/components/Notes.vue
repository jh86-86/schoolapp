<template>
<div class="container">
  <p>Notes</p>

<form @submit.prevent="addtodo">  <!--calls function on submit, prevent -->
    <label for="newToDo"></label>
    <input v-model="newtodo" type="text" name="newtodo" id="newTodo" value="" />  <!--the v-mode will link to data-->
    <button type="submit" name='button'>Add</button>
</form>        
<!-- <h4>{{newtodo}}</h4> -->

    <ul>
        <li 
            v-for="(item, index) in todos"
            v-bind:item="item"
            v-bind:index="index"
            v-bind:key="item.id"
        >
        <input type='checkbox' v-model="item.done" /> <!-- : binds checked to todo -->
         <span :class="{done: item.done}">{{item.title}}</span> <!-- if todo.done =true, apply class -->
         <button @click="removeToDo(index)" type="button" name="button">Delete</button>
         </li>

    </ul>
</div>  
</template>

<script>
export default {
    data() {
        return{
        newtodo:'',
        todos:[]
        }
       
    },
    methods: {
        addtodo(){
            console.log(' form submitted');
            console.log(this.newtodo);  /*this keyword will refernce anything from data plus value */
            this.todos.push({   //pushing in object
                title:this.newtodo,
                done:false, //initally false
                });
                 this.newtodo=''; //clears out input box
        },
        removeToDo(todo){
            const todoIndex= this.todos.indexOf(todo); //gets the number from the list index item
            this.todos.splice(todoIndex, 1); //removes the item from array at the index of the object apssed in by slicing array
        },
    }

}
</script>

<style>
.done{
    text-decoration: line-through;
}

li{
     list-style-type: none;
}

</style>
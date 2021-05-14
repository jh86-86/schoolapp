<template>
<div>
    <h1>Users</h1>
    <p>Team ID is {{$route.params.teamId}}</p>
</div>
</template>


<script>
export default{
    data(){       //hardcoded user until server set up
        return{
        username:"John",
        age:"10",
        class:"6",
    }
    }
}
</script>

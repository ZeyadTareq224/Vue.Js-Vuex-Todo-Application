<template>
    <div>
        <h1>Add Todos</h1>
        <form class="add" @submit="onSubmit">
            <input type="text" v-model="title" placeholder="Add Todo...">
            <input type="submit" value="submit">
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'AddTodo',
    data(){
        return {
            title: ''
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        onSubmit(e){
            e.preventDefault()
            this.addTodo(this.title)
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
    }

    input {
        flex: 10;
        padding: 10px;
        border: 1px solid #41b883;
        outline: 0;
    }

    input[type="submit"] {
        flex: 2;
        background: #41b883;
        color: #fff;
        border: 1px #41b833 solid;
        cursor: pointer;
    }
</style>
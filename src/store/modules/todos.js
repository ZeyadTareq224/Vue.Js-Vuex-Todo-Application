import axios from 'axios';

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => {
        return state.todos
    }    
};

const actions = {
    async fetchTodos ({ commit }){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        commit('setTodos', response.data)
    },

    async addTodo ({ commit }, title){
        const respose = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed:false })
        console.log(respose.data)
        commit('newTodo', respose.data)
    },

    async deleteTodo({ commit }, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        commit('removeTodo', id)
    },

    async filterTodos({ commit }, limit){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        commit('filterTodos', response.data)
    },
    
    async updateTodo({ commit }, updTodo){
        await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log(updTodo)
        commit('updateTodo', updTodo)
    }
};

const mutations = {
    setTodos: (state, todos) => {
        return state.todos = todos
    },
    newTodo: (state, todo) => {
        return state.todos.unshift(todo)
    },
    removeTodo: (state, id) =>{
        return state.todos = state.todos.filter(todo => todo.id !==id)
    },
    filterTodos: (state, todos) => {
        return state.todos = todos
    },
    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id)
        if (index !== -1){
            state.todos.splice(index, 1, updTodo);
        }
    }
};

export default {
    state,
    getters, 
    actions, 
    mutations,
};
<template>
  <div id="list" class="mt-1">
    <h2>   <img src="../svg/settinglogo.svg" style="width:40px;height:40px;text-align:center">
   To Do List</h2>
    <div class="input">
      <b-form-input v-model="newtodo" @keydown.enter="addTodo" placeholder="Add a new mission!" maxlength="20"></b-form-input>
      <b-btn variant="success" @click="addTodo" class="d-inline-block">新增</b-btn>
    </div>
<div class="b-table-simple">
    <b-table-simple >
      <b-thead>
        <b-tr>
          <b-th>To do</b-th>
          <b-th>Edit</b-th>
        </b-tr>
      </b-thead>
      <draggable v-model="todos" tag="tbody" v-bind="dragOption">
        <b-tr v-if="todos.length==0">
          <b-td colspan="2">沒有資料</b-td>
        </b-tr>
        <b-tr v-else v-for="(todo, index) in todos" :key="index">
          <b-td>
            <b-form-input v-model="todo.model" v-if="todo.edit" maxlength="20" ></b-form-input>
            <b-btn variant="link" class="text-danger" v-if="todo.edit" @click="cancelTodo(index)" @blur="cancelTodo(index)">
              <font-awesome-icon :icon="['fas', 'undo']"></font-awesome-icon>
            </b-btn>
            <b-btn variant="link" class="text-success" v-if="todo.edit" @click="saveTodo(index)" @blur="saveTodo(index)">
              <font-awesome-icon :icon="['fas', 'save']"></font-awesome-icon>
            </b-btn>
            <span v-else>{{ todo.name }}</span>
          </b-td>
          <b-td>
            <b-btn variant="link" class="text-primary" @click="editTodo(index)">
              <font-awesome-icon :icon="['fas', 'pen']"></font-awesome-icon>
            </b-btn>
            <b-btn variant="link" class="text-danger" @click="delTodo(index)">
              <font-awesome-icon :icon="['fas', 'trash-alt']"></font-awesome-icon>
            </b-btn>
          </b-td>
        </b-tr>
      </draggable>
    </b-table-simple>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newtodo: '',
      dragOption: {
        animation: 200
      }
    }
  },
  methods: {
    addTodo () {
      this.$store.commit('addTodo', this.newtodo)
      this.newtodo = ''
    },
    delTodo (index) {
      this.$store.commit('delTodo', index)
    },
    editTodo (index) {
      this.$store.commit('editTodo', index)
    },
    cancelTodo (index) {
      this.$store.commit('cancelTodo', index)
    },
    saveTodo (index) {
      this.$store.commit('saveTodo', index)
    }
  },
  computed: {
    todos: {
      get () {
        return this.$store.getters.todos
      },
      set (value) {
        this.$store.commit('dragTodo', value)
      }
    }
  }
}
</script>

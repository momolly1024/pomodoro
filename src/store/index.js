import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Swal from 'sweetalert2'
import moment from 'moment'

Vue.use(Vuex)

const timeleft = parseInt(process.env.VUE_APP_TIMELEFT)
const timeleftBreak = parseInt(process.env.VUE_APP_TIMELEFT_BREAK)
const getTimes = moment().format('YYYY年MM月DD日')

export default new Vuex.Store({
  state: {
    todos: [],
    historys: [],
    rehistorys: [],
    timeleft: timeleft,
    alarm: 'alarm2.mp3',
    current: '',
    isBreak: false,
    saysomething: '',
    next: ''
  },
  getters: {
    alarm (state) {
      return state.alarm
    },
    todos (state) {
      return state.todos
    },
    timeleft (state) {
      return state.timeleft
    },
    current (state) {
      return state.current
    },
    isBreak (state) {
      return state.isBreak
    },
    historys (state) {
      return state.historys
    },
    saysomething (state) {
      return state.saysomething
    },
    nextTodo (state) {
      if (state.todos.length > 0) state.next = state.todos[0].name
      else state.next = '沒有下一筆'
    }

  },
  mutations: {
    selectAlarm (state, data) {
      state.alarm = data
    },
    addTodo (state, data) {
      if (data.length <= 0) {
        Swal.fire({
          title: '請輸入待辦事項',
          showConfirmButton: false,
          timer: 800
        })
      } else {
        state.todos.push({ name: data, edit: false, model: data, time: getTimes })
        Swal.fire({
          // position: 'bottom-end',
          icon: 'success',
          title: '新增成功',
          showConfirmButton: false,
          timer: 800
        })
      }
    },
    dragTodo (state, data) {
      state.todos = data
    },
    delTodo (state, data) {
      state.todos.splice(data, 1)
    },
    editTodo (state, data) {
      state.todos[data].edit = !state.todos[data].edit
    },
    cancelTodo (state, data) {
      state.todos[data].edit = false
      state.todos[data].model = state.todos[data].name
    },
    saveTodo (state, data) {
      state.todos[data].edit = false
      state.todos[data].name = state.todos[data].model
    },
    start (state) {
      if (state.isBreak) {
        state.current = '休息一下'
      } else if (!state.isBreak) {
        state.current = state.todos[0].name
        state.historys.push(state.todos[0])
        state.todos.splice(0, 1)
      }
    },
    countdown (state) {
      state.timeleft--
    },
    finish (state) {
      if (state.todos.length > 0) {
        state.isBreak = !state.isBreak
      }
      state.current = ''
      state.timeleft = state.isBreak ? timeleftBreak : timeleft
    },
    delHistory (state, data) {
      state.historys.splice(state.historys.length - data - 1, 1)
    },
    nextTodo (state) {
      if (state.todos.length > 0) state.next = state.todos[0].name
      else state.next = '沒有下一筆'
    }

  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})

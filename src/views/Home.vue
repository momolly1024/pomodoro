<template>
  <div id="home">
    <h4>番茄鐘 Pomodoro</h4>
    <div id="animate">
      <vue-loaders name="pacman" color="darkorange" scale="1"></vue-loaders>
    </div>
    <h2>{{ currentText }}</h2>
    <h2>{{ timetext }}</h2>
    <b-btn variant="primary" v-if="status != 1" @click="start" class="btn">
      <font-awesome-icon :icon="['fas', 'play']"></font-awesome-icon>
    </b-btn>
    <b-btn variant="danger" v-if="status == 1" @click="pause" class="btn">
      <font-awesome-icon :icon="['fas', 'pause']"></font-awesome-icon>
    </b-btn>
    <b-btn variant="warning" v-if="current.length > 0 || todos.length  > 0" @click="finish(true)" class="btn">
      <font-awesome-icon :icon="['fas', 'step-forward']"></font-awesome-icon>
    </b-btn>
    <div class="time fixed-left" >
      <button  id="btn1" @click="timenow" v-if="timeshow==false">顯示時間</button>
      <button  id="btn2" @click="timehide"  v-if="timeshow==true">隱藏時間</button>
      <br>
      <h1 id="now" v-if="timeshow==true">{{ nowdate }}</h1>
      <h1 v-if="timeshow==true">{{time}}</h1>
      </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  data () {
    return {
      // 0 = 停止
      // 1 = 播放
      // 2 = 暫停
      status: 0,
      timer: 0,
      nowdate: '',
      time: '',
      timeshow: false,
      hidetime: ''
    }
  },
  computed: {
    currentText () {
      return this.current.length > 0 ? this.current : this.todos.length > 0 ? '點擊開始' : '沒有事項'
      //  if(this.current.length > 0){
      //    return this.current
      // }
      // else if(this.todos.length > 0){
      //    return 點擊開始
      // }
      // else{
      //    return 沒有事項
      // }
    },
    timetext () {
      const m = Math.floor(this.timeleft / 60)
      const s = Math.floor(this.timeleft % 60)
      return `${m} : ${s}`
    },
    alarm () {
      return this.$store.getters.alarm
    },
    timeleft () {
      return this.$store.getters.timeleft
    },
    current () {
      return this.$store.getters.current
    },
    todos () {
      return this.$store.getters.todos
    }
  },
  methods: {
    start () {
      if (this.status === 2) {
        // 暫停後繼續
        this.status = 1
        this.timer = setInterval(() => {
          this.$store.commit('countdown')
          if (this.timeleft <= 0) {
            this.finish(false)
          }
        }, 1000)
      } else {
        // 開始新倒數
        if (this.todos.length > 0) {
          this.$store.commit('start')
          this.status = 1
          this.timer = setInterval(() => {
            this.$store.commit('countdown')
            if (this.timeleft <= 0) {
              this.finish(false)
            }
          }, 1000)
        }
      }
    },
    finish (skip) {
      clearInterval(this.timer)
      this.status = 0
      this.$store.commit('finish')

      if (!skip) {
        const audio = new Audio()
        audio.src = './alarms/' + this.alarm
        audio.play()
      }

      if (this.todos.length > 0) {
        this.start()
      } else {
        setTimeout(() => {
          Swal.fire('恭喜，都完成囉~~~~')
          // alert('恭喜，都完成囉~~~~')
        }, 10)
      }
    },
    pause () {
      clearInterval(this.timer)
      this.status = 2
    },
    timenow () {
      setInterval(() => {
        const month = (new Date().getMonth() + 1)
        const day = new Date().getDate()
        const hours = new Date().getHours()
        const minutes = new Date().getMinutes()
        const seconds = new Date().getSeconds()
        this.nowdate = `${month}月${day}日`
        this.time = `${hours}：${minutes}：${seconds}`
      }, 1000)
      this.timeshow = true
    },
    timehide () {
      this.timeshow = false
      this.nowdate = ''
      this.time = this.hidetime
    }
  }
}
</script>

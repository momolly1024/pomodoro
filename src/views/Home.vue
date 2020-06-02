<template>
  <div id="home">
    <h3 class="mt-1"> <button @click="showpomodoro" style="background:none;border:none;color:#4f4f4f"><img src="../svg/tomato.svg" style="width:50px;height:45px; filter:drop-shadow(1px 1px 3px black)"> 番茄鐘 Pomodoro</button></h3>
   <hr>
    <div id="animate">
      <img src="../svg/break.svg" v-if="status != 1" style="width:180px;height:180px">
      <img src="../svg/working.svg" v-if="status == 1" style="width:180px;height:180px">
    </div>

      <div class="saysomthing " style="position:absolute;top:8rem;left:0%">
        <p style="writing-mode: vertical-rl;text-orientation: upright;">{{ savesaysomthing }}加油加油再撐一下，你可以的❤❤❤❤❤❤❤</p>
      </div>

    <h4>{{ currentText }}</h4>
    <div class="timetext">
      <h2> <img src="../svg/time.svg" style="width:70px;height:70px;filter:drop-shadow(4px 4px 5px black);">{{ timetext }}</h2>
    </div>
  <b-btn v-if="!sound" variant="link" @click="muted" class="text-danger mt-3">
      <font-awesome-icon size="lg" :icon="['fas','bell']" style="color:#8E8E8E"></font-awesome-icon>
    </b-btn>
    <b-btn v-if="sound" variant="link" @click="Nomuted" class="text-danger mt-3">
      <font-awesome-icon size="lg" :icon="['fas','bell-slash']" style="color:#8E8E8E"></font-awesome-icon>
    </b-btn>

    <b-btn variant="outline-info" v-if="status != 1" @click="start" class="btn" >
      <font-awesome-icon :icon="['fas', 'play']"></font-awesome-icon>
    </b-btn>
    <b-btn variant="outline-danger" v-if="status == 1" @click="pause" class="btn">
      <font-awesome-icon :icon="['fas', 'pause']"></font-awesome-icon>
    </b-btn>
    <b-btn variant="outline-success" v-if="current.length > 0 || todos.length  > 0" @click="finish(true)" class="btn">
      <font-awesome-icon :icon="['fas', 'step-forward']"></font-awesome-icon>
    </b-btn>
       {{nextTodo ()}}
    <p>接下來 : {{ next }}</p>
    <div class="time" >
      <button size="sm" id="btn1" @click="timenow" v-if="timeshow==false">顯示時間</button>
      <button size="sm" id="btn2" @click="timehide"  v-if="timeshow==true">隱藏時間</button>
      <br>
      <h5 id="now" v-if="timeshow==true">{{ nowdate }}</h5>
      <h5 v-if="timeshow==true">{{time}}</h5>
      </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
const audio = new Audio()
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
      hidetime: '',
      sound: false
    }
  },
  computed: {
    currentText () {
      return this.current.length > 0 ? this.current : this.todos.length > 0 ? '' : '快去新增待辦事項'
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
    },
    next () {
      return this.$store.getters.next
    },
    saysomething () {
      return this.$store.getters.saysomething
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
        // const audio = new Audio()
        audio.src = './alarms/' + this.alarm
        audio.play()
        setTimeout(() => {
          audio.pause()
        }, this.alarmSec * 1000)
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
    },
    muted () {
      audio.muted = true
      this.sound = true
    },
    Nomuted () {
      audio.muted = false
      this.sound = false
    },
    nextTodo () {
      this.$store.commit('nextTodo')
    },
    showpomodoro () {
      Swal.fire({
        title: '番茄鐘工作法：\n每次專注結束搭配一次休息，多次專注結束搭配一次長休息。\n勞逸結合，有助於提高工作效率。',
        showConfirmButton: false,
        timer: 3000
        // width: 200
      })
    }

  }
}
</script>

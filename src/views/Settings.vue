<template>
  <div id="settings" class="mt-3">

<div>
  <b-tabs content-class="mt-3">
    <b-tab title="鈴聲" active>    <b-table :items="items" :fields="fields" @row-clicked="selectAlarm" hover >
      <template v-slot:cell(preview)="data">
        <audio controls :src="'./alarms/'+data.item.file"></audio>
      </template>
      <template v-slot:cell(select)="data">
        <font-awesome-icon v-if="data.item.file == alarm" :icon="['fas', 'check']"></font-awesome-icon>
      </template>
    </b-table></b-tab>
    <b-tab title="個人化">
      <b-table-simple>
      <th>個人化設定</th>
      <tr>
      <td>勵志標語：<input type="text" class="sayinput" > <b-button size="sm" style="color:#AD5A5A;background:white" @click="savesaysomthing"> <font-awesome-icon :icon="['fas', 'save']"></font-awesome-icon></b-button></td>

      </tr>
      </b-table-simple>

      <b-table-simple>
      <th>目前想不到</th>
        <tr>
        <td>456</td>
        <td>456</td>
        </tr>
     </b-table-simple>
    </b-tab>
    <b-tab title="其他設定" >
      <p>coming soon...</p>
    </b-tab>
  </b-tabs>
</div>

  </div>
</template>
<script>
import Swal from 'sweetalert2'

export default {

  data () {
    return {
      items: [
        {
          name: '輕快',
          file: 'alarm1.mp3'
        }, {
          name: '歡樂',
          file: 'alarm2.mp3'
        }, {
          name: '鈴不停',
          file: 'alarm3.mp3'
        }, {
          name: 'Cheer Up',
          file: 'alarm4.mp3'
        }
        // {
        //   name: '無聲勝有聲',
        //   file: 'none'
        // }
      ],
      fields: [
        {
          key: 'name',
          label: '鬧鈴'
        },
        {
          key: 'preview',
          label: '試聽'
        }, {
          key: 'select',
          label: '選擇'
        }
      ]
    }
  },
  computed: {
    alarm () {
      return this.$store.getters.alarm
    }
  },
  methods: {
    selectAlarm (item) {
      this.$store.commit('selectAlarm', item.file)
    },
    savesaysomthing () {
      Swal.fire({
        title: '已儲存 ❤',
        showConfirmButton: false,
        timer: 800,
        width: 200

      })
    }

  }
}
</script>

<template>
    <div id="history">
            <b-table-simple  hover class="mt-1 w-75 mx-auto">
            <b-thead>
                <b-tr>
                <b-th style="font-size: 1.5rem;"><img src="../svg/historylogo.svg" style="width:40px;height:40px;text-align:center">
   歷史紀錄<img src="../svg/historylogo.svg" style="width:40px;height:40px;text-align:center"></b-th>
                </b-tr>
            </b-thead>
            <b-tbody v-for = "(history, index) in historys" :key="index">
            <b-tr >
                <b-td>{{ history.time }}</b-td>
            </b-tr>
            <b-tr>
                <b-td>{{ history.name }}</b-td>
            </b-tr>
            </b-tbody>
            </b-table-simple>

    </div>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        {
          key: 'time',
          label: '時間'
        }, // 時間
        {
          key: 'name',
          label: '事項'
        } // 事項
      ]
    }
  },
  computed: {
    historys () {
      return this.$store.getters.historys
    }
  }
}

</script>

<template>
  <div id="app" class="container justify-content-center">
    <div id="nav">

      <b-btn-group class="fixed-bottom">
      <router-link to="/"> <b-button class="menubtn"><font-awesome-icon :icon="['fas', 'clock']"></font-awesome-icon>  首頁  </b-button> </router-link>
      <router-link to="/list"><b-button b-button class="menubtn"><font-awesome-icon :icon="['fas', 'list-ul']"></font-awesome-icon>  待辦  </b-button> </router-link>
      <router-link to="/historys"><b-button b-button class="menubtn"><font-awesome-icon :icon="['fas', 'history']"></font-awesome-icon>  紀錄  </b-button> </router-link>
      <router-link to="/settings"><b-button b-button class="menubtn"><font-awesome-icon :icon="['fas', 'cog']"></font-awesome-icon>  設定  </b-button> </router-link>
      </b-btn-group>

    </div>
    <keep-alive>
      <vue-page-transition name="fade">
    <router-view/>
    </vue-page-transition>
    </keep-alive>
  </div>
</template>

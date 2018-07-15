<template>
  <div id="app">
    <div id="app-left-sb">
      <app-component-sidebar></app-component-sidebar>
    </div>
    <app-component-topmenu id="app-left-tm"></app-component-topmenu>
    <app-component-sidemenu id="app-left-sm"></app-component-sidemenu>
    <app-component-topnavbar id="app-left-tnb"></app-component-topnavbar>
    <div id="app-rv">
      <router-view/>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
import SideMenu from './components/SideMenu.vue'
import TopMenu from './components/TopMenu.vue'
import TopNavBar from './components/TopNavBar.vue'

export default {
  name: 'App',
  components: {
    'app-component-sidebar': SideBar,
    'app-component-topmenu': TopMenu,
    'app-component-sidemenu': SideMenu,
    'app-component-topnavbar': TopNavBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
#app-rv {
  width: 72%;
  position: absolute;
  right: 0;
}
#app-left-sb {
  display: block;
  width: 28%;
  position: fixed;
}
#app-left-sm, #app-left-tnb, #app-left-tm {
  display: none;
}
@media only screen and (max-width: 948px) {
  #app-rv {
    width: 100%;
  }
  #app-left-tnb {
    display: flex;
  }
  #app-left-sb, #app-left-sm, #app-left-tm {
    display: none;
  }
}
@media only screen and (max-width: 548px) {
  #app-rv {
    width: 100%;
  }
  #app-left-tnb {
    display: flex;
  }
  #app-left-sb, #app-left-sm, #app-left-tm {
    display: none;
  }
}

</style>

<script setup>
import HomeFooter from './components/HomeFooter.vue';
import Brand from './components/brand.vue'
import Device from './components/device.vue'
import TheWelcome from './components/TheWelcome.vue'

import Dark from "./components/glavni.vue"
import Komp from "./components/computers.vue";
import Note from "./components/noutbook.vue";
import Card from "./components/cards.vue";
import Rayon from "./components/Районы обслуживания .vue"
import Kontakt from "./components/kantakt.vue"
import Senter from "./components/О сервисном центре.vue"
import Mono from "./components/monoblocks.vue";
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
  export default {
    name: 'App'
  }
</script>
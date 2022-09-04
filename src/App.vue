<template>
  <v-app>
    <app-header />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '@/views/components/app-header/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    AppHeader
  },

  data () {
    return {
      //
    }
  }
})
</script>

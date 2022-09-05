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
import { getUserLogin } from '@/helpers/auth'
import User from '@/store/modules/user/model'
import Hero from '@/store/modules/hero/model'

export default defineComponent({
  name: 'App',
  components: {
    AppHeader
  },
  created () {
    if (this.heroes.length === 0) {
      this.fetchHeroes()
    }

    const hero = getUserLogin()

    if (hero) {
      User.insert({
        data: {
          hero: JSON.parse(hero)
        }
      })
    }
  },

  data () {
    return {
      //
    }
  },
  computed: {
    heroes () {
      return Hero.all()
    }
  },
  methods: {
    async fetchHeroes () {
      await Hero.api().get('/heroes')
    }
  }
})
</script>

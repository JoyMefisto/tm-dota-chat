<template>
  <default-layout>
    <h1>Авторизуйтесь под любым героем</h1>
    <auth-cards-comp :items="heroes" @to:user="toUser" />
  </default-layout>
</template>

<script>
import Hero from '@/store/modules/hero/model'
import AuthCardsComp from '@/views/pages/auth/components/cards'
import { MainRoute } from '@/constants/router'
import DefaultLayout from '@/views/layouts/page'

export default {
  name: 'AuthPage',
  components: {
    DefaultLayout,
    AuthCardsComp
  },
  mounted () {
    this.fetchHeroes()
  },
  computed: {
    heroes () {
      return Hero.all()
    }
  },
  methods: {
    async fetchHeroes () {
      await Hero.api().get('/heroes')
    },
    /**
     * Перейти на главную страницу
     */
    toUser () {
      this.$router.push(MainRoute)
    }
  }
}
</script>

<style scoped>

</style>

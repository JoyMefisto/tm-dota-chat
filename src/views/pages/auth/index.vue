<template>
  <default-layout>
    <h1>Авторизуйтесь под любым героем</h1>
    <auth-cards-comp :items="heroes" @to:user="toUser" />
  </default-layout>
</template>

<script>
import { get } from 'lodash'
import Hero from '@/store/modules/hero/model'
import User from '@/store/modules/user/model'
import AuthCardsComp from '@/views/pages/auth/components/cards'
import DefaultLayout from '@/views/layouts/page'
import { MainRoute } from '@/constants/router'
import { saveUserLogin } from '@/helpers/auth'

export default {
  name: 'AuthPage',
  components: {
    DefaultLayout,
    AuthCardsComp
  },
  computed: {
    heroes () {
      return Hero.all()
    },
    getUser () {
      return User.query().first()
    }
  },
  created () {
    if (get(this, 'getUser.hero', false)) return this.$router.push(MainRoute)
  },
  methods: {
    /**
     * Перейти на главную страницу
     */
    async toUser (hero) {
      await User.insert({
        data: {
          hero
        }
      })

      saveUserLogin(JSON.stringify(hero))
      this.$router.push(MainRoute)
    }
  }
}
</script>

<style scoped>

</style>

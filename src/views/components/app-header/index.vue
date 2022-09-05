<template>
  <v-app-bar
    class="app-header px-4"
    color="white"
    height="80"
    elevation="3"
    flat
    app
  >
    <div class="app-header__container d-flex justify-space-between">
      <router-link v-if="$route.name === MainRoute.name" :to="PersonRoute">Личный кабинет</router-link>
      <router-link v-if="$route.name === PersonRoute.name" :to="MainRoute">Главная странциа</router-link>
      <div v-if="isAuth">
        <span>Вы зашли под {{heroName}}</span>
        <v-btn
          class="ml-4"
          variant="outlined"
          color="primary"
          @click="exit(getUser.id)"
        >
          Выйти
        </v-btn>
      </div>
      <div v-else>
        <p>Для продолжения, выберите героя</p>
      </div>
    </div>

  </v-app-bar>
</template>

<script>
import { get } from 'lodash'
import User from '@/store/modules/user/model'
import { AuthRoute, PersonRoute, MainRoute } from '@/constants/router'
import { removeUserLogin } from '@/helpers/auth'

export default {
  name: 'AppHeader',
  data () {
    return {
      PersonRoute,
      MainRoute
    }
  },
  computed: {
    /**
     * Пользователь зашёл под каким либо героем?
     * @returns {boolean}
     */
    isAuth () {
      return Boolean(get(this, 'getUser.hero', false))
    },
    /**
     * Получить выбранного героя
     * @returns {Item<InstanceOf<User>>}
     */
    getUser () {
      return User.query().first()
    },
    heroName () {
      return get(this, 'getUser.hero.localized_name')
    }
  },
  methods: {
    /**
     * Выходим из под выбранного героя
     * @param id
     */
    async exit (id) {
      await User.delete(id)
      removeUserLogin()
      this.$router.push(AuthRoute)
    }
  }
}
</script>

<style lang="scss">
.app-header {
  margin: 0 auto;
  max-width: 1440px;

  &__container {
    width: 100%;
  }
}
</style>

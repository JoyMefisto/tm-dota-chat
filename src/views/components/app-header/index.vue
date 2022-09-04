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
      <div>Logo</div>
      <div v-if="isAuth">
        <span>Вы зашли под {{getUser.localized_name}}</span>
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
import User from '@/store/modules/user/model'
import { AuthRoute } from '@/constants/router'

export default {
  name: 'AppHeader',
  computed: {
    /**
     * Пользователь зашёл под каким либо героем?
     * @returns {boolean}
     */
    isAuth () {
      return Boolean(this.getUser)
    },
    /**
     * Получить выбранного героя
     * @returns {Item<InstanceOf<User>>}
     */
    getUser () {
      return User.query().first()
    }
  },
  methods: {
    /**
     * Выходим из под выбранного героя
     * @param id
     */
    async exit (id) {
      await User.delete(id)
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

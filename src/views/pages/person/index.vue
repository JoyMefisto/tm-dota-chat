<template>
  <default-layout>
    <h1>Страница пользователя</h1>
    <div v-if="isUser">
      <p>
        <span>Имя: </span>
        <span>{{getUser.hero.localized_name}}</span>
      </p>
      <p>
        <span>Тип атаки: </span>
        <span>{{getUser.hero.attack_type}}</span>
      </p>
      <p>
        <span>Роли: </span>
        <span v-text="getUser.hero.roles.join('/')" />
      </p>
    </div>

  </default-layout>
</template>

<script>
import User from '@/store/modules/user/model'
import { get } from 'lodash'

export default {
  name: 'PersonPage',
  computed: {
    /**
     * Получить выбранного героя
     * @returns {Item<InstanceOf<User>>}
     */
    getUser () {
      return User.query().first()
    },
    isUser () {
      return get(this, 'getUser.hero', false)
    }
  }
}
</script>

<style scoped>

</style>

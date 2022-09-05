<template>
  <div class="d-flex flex-wrap">
    <v-card class="pa-4 ma-4" v-for="(item, key) in items" :key="key">
      <v-card-title>{{item.localized_name}}</v-card-title>
      <v-btn @click="setHeroForAuth(item.id)">Выбрать</v-btn>
    </v-card>
  </div>
</template>

<script>
import Hero from '@/store/modules/hero/model'

export default {
  name: 'AuthCardComp',
  props: {
    items: Object
  },
  methods: {
    /**
     * Авторизоваться под выбранным героем
     * @param id
     */
    setHeroForAuth (id) {
      const hero = Hero.find(id)

      this.$emit('to:user', hero)
    }
  }
}
</script>

<style scoped>

</style>

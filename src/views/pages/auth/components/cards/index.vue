<template>
  <div class="d-flex flex-wrap">
    <v-card class="pa-4 ma-4" v-for="(item, key) in items" :key="key">
      <v-card-title>{{item.localized_name}}</v-card-title>
      <v-btn @click="setHeroForAuth(item.id)">Выбрать</v-btn>
    </v-card>
  </div>
</template>

<script>
import Heroes from '@/store/modules/hero/model'
import Person from '@/store/modules/user/model'

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
      const hero = Heroes.find(id)

      Person.create({ data: hero }).then(() => {
        this.$emit('to:user')
      })
    }
  }
}
</script>

<style scoped>

</style>

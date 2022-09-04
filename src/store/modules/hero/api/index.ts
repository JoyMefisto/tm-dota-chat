import Hero from '@/store/modules/hero/model'

export default {
  fetchHeroes () {
    return Hero.api().get('/heroes')
  }
}

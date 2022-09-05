import { Model } from '@vuex-orm/core'

export default class User extends Model {
  static entity = 'user'

  static fields () {
    return {
      id: this.uid(),
      hero: this.attr({})
    }
  }
}

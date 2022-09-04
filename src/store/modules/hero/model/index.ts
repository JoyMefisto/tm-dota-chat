import { Model } from '@vuex-orm/core'

export default class Hero extends Model {
  static entity = 'heroes'

  static fields () {
    return {
      id: this.attr(null),
      localized_name: this.attr(''),
      attack_type: this.attr(''),
      legs: this.attr(null),
      name: this.attr(''),
      primary_attr: this.attr(''),
      roles: this.attr([])
    }
  }
}

import Heroes from '@/store/modules/hero/model'

export default class User extends Heroes {
  static entity = 'user'

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

import { createStore } from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import axios from 'axios'

import Hero from '@/store/modules/hero/model'
import User from '@/store/modules/user/model'

VuexORM.use(VuexORMAxios, {
  axios,
  baseURL: process.env.VUE_APP_API_PREFIX
})

// Create a new instance of Database.
const database = new VuexORM.Database()

database.register(Hero)
database.register(User)

// Register Models to Database.
export default createStore({
  plugins: [VuexORM.install(database)]
})

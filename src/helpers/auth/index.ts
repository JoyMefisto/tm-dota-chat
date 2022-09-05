import {
  setLocalStorageItem,
  getLocalStorageItem,
  removeLocalStorageItem
} from '@/helpers/local-storage'
import { AUTH_HERO } from '@/constants/auth'

/**
 * Записываем логин пользователя в localStorage
 * @param {string} login - логин пользователя
 */
export const saveUserLogin = (login: string) => setLocalStorageItem(AUTH_HERO, login)
/**
 * Получаем логин пользователя из localStorage
 * @return {string}
 */
export const getUserLogin = () => getLocalStorageItem(AUTH_HERO)
/**
 * Удаляем логин пользователя из localStorage
 */
export const removeUserLogin = () => removeLocalStorageItem(AUTH_HERO)

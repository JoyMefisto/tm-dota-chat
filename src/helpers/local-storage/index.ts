/**
 * Записываем значение в localStorage
 * @param {string} key - ключ
 * @param {string} value - значение
 */
export const setLocalStorageItem = (key: string, value: string) => localStorage.setItem(key, value)
/**
 * Получаем значение из localStorage
 * @param {string} key - ключ
 * @return {string}
 */
export const getLocalStorageItem = (key: string) => localStorage.getItem(key)
/**
 * Удаляем значение из localStorage
 * @param {string} key - ключ
 */
export const removeLocalStorageItem = (key: string) => localStorage.removeItem(key)

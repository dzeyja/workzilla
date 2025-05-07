export const USER_LOCALSTORAGE_KEY = 'user'

const token = typeof window !== 'undefined'
    ? localStorage.getItem(USER_LOCALSTORAGE_KEY)
    : ''
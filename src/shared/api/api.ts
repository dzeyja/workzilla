import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/lib/const/localStorage";

const token = typeof window !== undefined 
    ? localStorage.getItem(USER_LOCALSTORAGE_KEY)
    : ''

export const $api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        authorization: token || ''
    }
})
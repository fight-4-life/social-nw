import axios from 'axios';
import {UsersType} from "../types/types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'api-key': '8b8490ba-4ac0-44fd-a386-a1e6ec25d08c' }
})

export type GetItemsType = {
    items: Array<UsersType>
    totalCount: number
    error: string | null
}

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

export type APIResponseType<D = {}, RC = ResultCodeEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}
import {create} from 'zustand';

export const LoginStore = create(()=>({
    isLogin : false, //false
    LoginMail : '',
}))
import {IUser} from "../interfaces";
let AUTH_USER ="AUTH_USER";
let LOGOUT_USER = "LOGOUT_USER";
export let AUTH_USER_SAGA ="AUTH_USER_SAGA";
const initialState ={
    User : undefined
}
export const AuthReducer = (state :any =initialState, action :any) => {
    switch (action.type) {

        case AUTH_USER:
            return {
                ...state,
                User:action.User
            }
        case LOGOUT_USER:
            return {
            ...state,
            User: undefined
        }
        default: return state;
    }
}

export let AuthUserAction = (User: IUser) => {
    return {
        type: AUTH_USER,
        User
    }
}
export let LogoutUserAction = () => {
    return {
        type: LOGOUT_USER,
    }
}
export let AuthUserSagaAction = (login:string, password:string) => {
    return {
        type: AUTH_USER_SAGA,
        login,
        password,
    }
}


export default AuthReducer;


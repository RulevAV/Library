import {IUser} from "../interfaces";
let AUTH_USER ="AUTH_USER";
let LOGOUT_USER = "LOGOUT_USER";
export let AUTH_USER_SAGA ="AUTH_USER_SAGA";
let CHANGES_ERROR_MASSAGE = "CHANGES_ERROR_MASSAGE";
const initialState ={
    User : undefined,
    errorMessage:undefined
}
export const AuthReducer = (state :any =initialState, action :any) => {
    switch (action.type) {

        case AUTH_USER:
            return {
                ...state,
                User:action.User,
                errorMessage:undefined
            }
        case LOGOUT_USER:
            localStorage.clear();
            return {
            ...state,
            User: undefined
        }
        case CHANGES_ERROR_MASSAGE:
            return {
                ...state,
                errorMessage: action.errorMessage
            }
        default: return state;
    }
}
export let ChangesErrorMassageAcion = (errorMessage: string|undefined) => {
    return {
        type: CHANGES_ERROR_MASSAGE,
        errorMessage
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


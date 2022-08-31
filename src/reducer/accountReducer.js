import {USER_DATA_FROM_LOCAL_STORAGE, USER_LOGIN, USER_LOGON_ERROR, USER_LOGOUT} from "../helper/constant";


const initState = {
    userData: null,
    errorMsg: "",
    userToken: null,

}

export const AccountReducer = ( state = initState, action) => {
    const {type,payload} = action

    switch (type) {

        case USER_LOGIN:
            let dataTem = {
                token: action.token,
                user: action.user,
            }
            // delete action.user.role
            localStorage.setItem("token",action.token)
            localStorage.setItem("authData",JSON.stringify(action.user))
            return {...state, userData: dataTem.user, userToken: dataTem.token}

        case USER_LOGON_ERROR:
            let msg='invalid username or password'
            return {...state,errorMsg: msg}

        case USER_LOGOUT:
            localStorage.removeItem("token")
            localStorage.removeItem("authData")
            return {...state, userToken: null, userData: null}

        case USER_DATA_FROM_LOCAL_STORAGE:
            return {...state,userData: action.userData, userToken: action.userToken}




        default:
            return state
    }
}
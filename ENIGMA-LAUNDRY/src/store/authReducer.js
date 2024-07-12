const valToken = localStorage.getItem("token")

const DEFAULT_STATE = {
    token: valToken,
    isAuthenticated: !!valToken,

}


export const authReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case "SET_TOKEN":
            localStorage.setItem("token", action.token)
            return { ...state, token: action.token, isAuthenticated: true };
        case "LOGOUT":
            localStorage.removeItem("token")
            return { ...state, token: null, isAuthenticated: false }
        case "CHECK_AUTH_STATUS":
            return {
                ...state,
                isAuthenticated: state.token ? true : false
            }
            default:
            return state
    }   
       


}
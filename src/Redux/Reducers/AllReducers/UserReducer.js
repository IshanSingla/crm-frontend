import { FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "../../Actions/UserActions"

const initialData = {
    loader: false,
    user: [],
    error: ''
}

export const UserReducer = (state=initialData, action) => {
    switch (action.type){
        case FETCH_USER_REQUEST: 
            return {
                ...state,
                loader: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loader: false,
                user: action.payload
            }
        case FETCH_USER_ERROR:
            return {
                ...state,
                loader: false,
                error: action.payload
            }
        default:
            return state
    }
}
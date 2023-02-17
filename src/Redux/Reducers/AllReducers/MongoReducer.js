import { MONGO_ERROR, MONGO_REQUEST, MONGO_SUCCESS } from "../../Actions/MongoUserActions";

const initialData = {
    loader: false,
    mongoUser: {},
    error: ""
}

export const MongoReducer = (state=initialData, action) => {
    switch(action.type){
        case MONGO_REQUEST:
            return {
                ...state,
                loader: true
            }
        case MONGO_SUCCESS:
            return {
                ...state,
                mongoUser: action.payload,
                loader: false
            }
        case MONGO_ERROR:
            return {
                ...state,
                error: action.payload,
                loader: false
            }
        default:
            return state
    }
}
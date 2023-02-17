import { publicApi } from "../../Api";

export const MONGO_REQUEST = "MONGO_REQUEST";
export const MONGO_SUCCESS = "MONGO_SUCCESS";
export const MONGO_ERROR = "MONGO_ERROR";

const mongoRequest = () => {
    return {
        type: MONGO_REQUEST,
    }
}

const mongoError = (error) => {
    return {
        type: MONGO_ERROR,
        payload: error.message
    }
}

const mongoSuccess = (user) => {
    return {
        type: MONGO_SUCCESS,
        payload: user
    }
}

export const getMongoData = (token) => {
    return (dispatch) => {
        dispatch(mongoRequest());
        publicApi.get("/auth/get", {
            headers: {
                authorization: token
            }
        }).then((res) => {
            dispatch(mongoSuccess(res.data.user));
        }).catch((err) => {
            dispatch(mongoError(err));
        })
    }
}
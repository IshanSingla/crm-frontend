import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../Config/firebase";

export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}
export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users.user
    }
}
export const fetchUserError = (error) => {
    return {
        type: FETCH_USER_ERROR,
        payload: error.message
    }
}

export const fetchUser = (email, password) => {
    return (dispatch) => {
        dispatch(fetchUserRequest());
        signInWithEmailAndPassword(auth, email, password).then((userCreds) => {
            dispatch(fetchUserSuccess(userCreds));
        }).catch((err) => {
            dispatch(fetchUserError(err));
        })
    }
}

export const signoutUser = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest());
        signOut(auth).then(() => {
            dispatch(fetchUserSuccess({undefined}));
        }).catch((err) => {
            dispatch(fetchUserError(err));
        })
    }
}
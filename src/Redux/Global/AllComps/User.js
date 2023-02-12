import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../../Config/firebase';
import { fetchUserError, fetchUserRequest, fetchUserSuccess } from '../../Actions/UserActions';

function User({children}){

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserRequest());
        onAuthStateChanged(auth, (user) => {
            dispatch(fetchUserSuccess({user}));
        }, (err) => {
            dispatch(fetchUserError(err));
        })
    }, [])

    return(
        <>
            {children}
        </>
    )
}

export default User;
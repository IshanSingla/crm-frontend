import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Lock({component}){

    let user = useSelector((state) => state.UserReducer);
    let navigate = useNavigate();
    const [bool, setBool] = useState(false);

    useEffect(() => {
        setBool(user.user);
        if(!user.user){
            navigate("/");
        }
    }, [user.user]);

    return(
        <>
            {
                bool && component
            }
        </>
    )
}

export default Lock;
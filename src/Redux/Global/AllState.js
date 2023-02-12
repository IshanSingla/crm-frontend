import React from 'react';
import User from './AllComps/User';

function AllState({children}){
    return(
        <User>
            {children}
        </User>
    )
}

export default AllState;
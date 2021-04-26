import React, {useContext} from 'react';
import {UserContext} from '../contexts/UserContext';
import User from './User';

const UsersList = () => {
    const {users, isLoading} = useContext(UserContext)

    let allUsers = isLoading ? (
        <div className='loading'>
            <p>Loading Users...</p>
        </div>
    ) : (
        users.map(user => (
            <User key={user.login.uuid} user={user}/>
        ))
    )
    return ( 
        <div>
            {allUsers}
        </div>
     );
}
 
export default UsersList;
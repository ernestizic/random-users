import React, {useContext} from 'react';
import {UserContext} from '../contexts/UserContext';
import User from './User';
import { IoIosCloudDownload } from 'react-icons/io';

const UsersList = () => {
    const {clonedUsers, isLoading} = useContext(UserContext)

    let allUsers = isLoading ? (
        <div className='loading'>
            <p>Loading Users...</p>
        </div>
    ) : (
        clonedUsers.length === 0 ? (
            <p style={{textAlign: 'center'}}>No user to show</p>
        ) : (
            clonedUsers.map(user => (
                <User key={user.login.uuid} user={user}/>
            ))
        )
    )

    return ( 
        <div>
           {allUsers}
           <div className='download-div'>
                <button><IoIosCloudDownload style={{paddingRight: '12px'}}/> Download results</button>
            </div>
        </div>
     );
}
 
export default UsersList;
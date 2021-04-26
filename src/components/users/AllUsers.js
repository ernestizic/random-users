import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import UsersList from '../users/UsersList';

const AllUsers = () => {
    const {gender} = useContext(UserContext)
    return ( 
        <div className='all-users'>
            <h2>{gender} Users</h2>
            <p style={{paddingLeft: '60px'}}>Filter by</p>
            <div className='filterby' style={{paddingLeft: '60px'}}>
                <input type='search' placeholder='Find in list' style={{padding: '7px', borderRadius: '12px'}}/>
            </div>
            <UsersList />
        </div>
     );
}
 
export default AllUsers;
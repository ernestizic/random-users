import React from 'react';
import UsersList from '../users/UsersList';
import UserContextProvider from '../contexts/UserContext';

const AllUsers = () => {
    return ( 
        <div className='all-users'>
            <h2>All Users</h2>
            <p style={{paddingLeft: '60px'}}>Filter by</p>
            <div className='filterby' style={{paddingLeft: '60px'}}>
                <input type='search' placeholder='Find in list' style={{padding: '7px', borderRadius: '12px'}}/>
            </div>
            
            <UserContextProvider>
                <UsersList />
            </UserContextProvider>
        </div>
     );
}
 
export default AllUsers;
import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import UsersList from '../users/UsersList';
import Dashboard from '../dashboard/Dashboard.js'

const AllUsers = () => {
    const {gender} = useContext(UserContext)
    return ( 
        <Dashboard>
            <div className='all-users animate__animated animate__fadeIn'>
                <div className='heading'>
                    <h2>{gender}</h2>
                    <p>Filter by</p>
                    <div className='filterby'>
                        <input type='search' placeholder='Find in list' style={{padding: '7px', borderRadius: '12px'}}/>
                    </div>
                </div>  
                <UsersList />
            </div>
        </Dashboard>
     );
}
 
export default AllUsers;
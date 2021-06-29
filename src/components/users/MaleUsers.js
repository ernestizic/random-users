//Component not used

import React, {useContext} from 'react';
import { UserContext } from '../contexts/UserContext';
import Dashboard from '../dashboard/Dashboard';
import User from './User';

const MaleUsers = () => {
    const {male, isLoading} = useContext(UserContext);

    let maleUsers = isLoading ? (
        <div className='loading'>
            <p>Loading Users...</p>
        </div>
    ) : (
        male.length === 0 ? (
            <p style={{textAlign: 'center'}}>No user to show</p>
        ) : (
            male.map(user => (
                <User key={user.login.uuid} user={user}/>
            ))
        )
    )
    return (
        <Dashboard>
            <h2>Male Users</h2>
            <p style={{paddingLeft: '60px'}}>Filter by</p>
            <div className='filterby' style={{paddingLeft: '60px'}}>
                <input type='search' placeholder='Find in list' style={{padding: '7px', borderRadius: '12px'}}/>
            </div>
            {maleUsers}
        </Dashboard>
    )
}

export default MaleUsers

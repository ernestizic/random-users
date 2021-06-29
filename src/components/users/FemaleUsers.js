//Component not used

import React, {useContext} from 'react'
import { UserContext } from '../contexts/UserContext';
import Dashboard from '../dashboard/Dashboard';
import User from './User';

const FemaleUsers = () => {
    const {female, isLoading} = useContext(UserContext);

    let femaleUsers = isLoading ? (
        <div className='loading'>
            <p>Loading Users...</p>
        </div>
    ) : (
        female.length === 0 ? (
            <p style={{textAlign: 'center'}}>No user to show</p>
        ) : (
            female.map(user => (
                <User key={user.login.uuid} user={user}/>
            ))
        )
    )
    return (
        <Dashboard>
            <h2>Female Users</h2>
            <p style={{paddingLeft: '60px'}}>Filter by</p>
            <div className='filterby' style={{paddingLeft: '60px'}}>
                <input type='search' placeholder='Find in list' style={{padding: '7px', borderRadius: '12px'}}/>
            </div>
            {femaleUsers}
        </Dashboard>
    )
}

export default FemaleUsers

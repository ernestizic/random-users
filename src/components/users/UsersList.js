import React, {useContext} from 'react';
import {UserContext} from '../contexts/UserContext';
import User from './User';

const UsersList = () => {
    const {clonedUsers, isLoading, back} = useContext(UserContext)

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

    let oneUser = clonedUsers.map(user => (
        <>
        <p style={{marginLeft: '60px', cursor: 'pointer'}} onClick={back}><i className="fas fa-arrow-left" style={{color: '#30BBB5'}}></i> RESULTS</p>
        <div className='user-detail' key={user.login.uuid}>
            <div className='user-dp'>
                <img src={user.picture.large} alt='user-img'/>
            </div>

            <div className='user-details'>
                <p style={{marginTop:'0', fontSize: '20px'}}><b>{user.name.title} {user.name.first} {user.name.last} </b> {user.dob.age}</p>
                <address>{user.location.street.number} {user.location.street.name} {user.location.state}</address>
                <p className='mail'><i className='fas fa-envelope-square'></i> {user.email}</p>
                <p className='joined'>JOINED: {user.registered.date}</p>
                <p className='phone'> <i className='fas fa-phone-volume'></i> {user.phone}</p>
                <p className='phone'> <i className="fas fa-mobile"></i>{user.phone}</p>
            </div>
        </div>
        </>
    ))

    const show = clonedUsers.length === 1 ? (oneUser) : (allUsers)

    return ( 
        <div>
           {show}
        </div>
     );
}
 
export default UsersList;
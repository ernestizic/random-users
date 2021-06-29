import React, {useContext} from 'react';
import {UserContext} from '../contexts/UserContext';
import User from './User';
import { IoIosCloudDownload } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const UsersList = () => {
    const {currentUsers, isLoading, prev, next} = useContext(UserContext)

    let allUsers = isLoading ? (
        <div className='loading'>
            <p>Loading Users...</p>
        </div>
    ) : (
        currentUsers.length === 0 ? (
            <p style={{textAlign: 'center'}}>No user to show</p>
        ) : (
            currentUsers.map(user => (
                <User key={user.login.uuid} user={user}/>
            ))
        )
    )

    return ( 
        <div>
           {allUsers}
           <div className='download-div'>
                <button className='download-btn'><IoIosCloudDownload style={{paddingRight: '12px'}}/> Download results</button>
                <div className='pagination'>
                    <button className='fir' onClick={prev}><IoIosArrowBack/></button>
                    <button className='sec' onClick={next}><IoIosArrowForward/></button>
                </div>
            </div>
        </div>
     );
}
 
export default UsersList;
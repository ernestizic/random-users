import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from "../contexts/UserContext";
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const {users} = useContext(UserContext); 
    const {user_id} = useParams();

    const [userDetail, setUserDetail] = useState('');

    useEffect(() => {
       setUserDetail(users.find(user => user.cell === user_id))
    }, [users, user_id])

    return ( 
        <div>
            <p style={{color: '#fff'}}>{userDetail.cell}</p>
        </div>
     ); 
}
 
export default UserDetails;
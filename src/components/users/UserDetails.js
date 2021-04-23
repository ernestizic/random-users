import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const UserDetails = () => {

    const {user_id} = useParams;
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        axios.get(`https://randomuser.me/api/?${user_id}`)
            .then(res => {
                console.log(res.data.results)
                setUserDetails(res.data.results)
            })
    }, [user_id])

    const details = userDetails ? (
        <div>
            <p>{userDetails.gender}</p>
        </div>
    ) : (
        <div><h3>Nothing to see here</h3></div>
    )
    return ( 
        <div>
            {details}
        </div>
     );
}
 
export default UserDetails;
import React, { useContext } from 'react';
//import {Link} from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const User = ({user}) => {
    const {userDetail} = useContext(UserContext);
    return ( 
        <div className='user-div'>
            <div className='user-dp'>
                <img src={user.picture.medium} alt='user-img'/>
            </div>
            <div className='user-details'>
                <h4 style={{marginTop:'0'}}>{user.name.title} {user.name.first} {user.name.last}</h4>
                <address>{user.location.street.number} {user.location.street.name} {user.location.state}</address>
                <div className='emailphone'>   
                    <p><i className='fas fa-envelope-square'></i> {user.email}</p>
                    <p style={{padding: '0 20px'}}> <i className='fas fa-phone-volume'></i> {user.phone}</p>
                </div>
            </div>
            <div className='user-arrow'>
                {/*<Link to={`/user/${user.cell}`}><i className='fas fa-angle-right'></i></Link> */}
                <button onClick={()=> userDetail(user.cell)}><i className='fas fa-angle-right'></i></button>
            </div>
        </div>
     );
}
 
export default User;
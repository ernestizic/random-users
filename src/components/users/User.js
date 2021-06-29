import React from 'react';
import {Link} from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';

const User = ({user}) => {

    return ( 
        <div className='user-div'>
            <div className='user-dp'>
                <img src={user.picture.medium} alt='user-img'/>
            </div>
            <div className='user-details'>
                <h4 style={{marginTop:'0'}}>{user.name.title} {user.name.first} {user.name.last}</h4>
                <address>{user.location.street.number} {user.location.street.name} {user.location.state}</address>
                <div className='emailphone'>   
                    <p><AiOutlineMail /> {user.email}</p>
                    <p className='ph'> <FiPhoneCall /> {user.phone}</p>
                </div>
            </div>
            <div className='user-arrow'>
                <Link to={`/user/${user.cell}`}><FaArrowRight /></Link>
                {/*<button onClick={()=> userDetail(user.cell)}><FaArrowRight /></button>*/}
            </div>
        </div>
     );
}
 
export default User;
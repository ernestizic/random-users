import React from 'react';

const User = ({user}) => {
    return ( 
        <div className='user-div'>
            <div className='user-dp'>
                <img src={user.picture.medium} alt='user-img'/>
            </div>
            <div className='user-details'>
                <h4 style={{marginTop:'0'}}>isaac</h4>
                <address>9278 new road, kilcoole, waterford</address>
                <div className='emailphone'>   
                    <p><i className='fas fa-envelope-square'></i> {user.email}</p>
                    <p style={{paddingLeft: '20px'}}> <i className='fas fa-phone-volume'></i> {user.phone}</p>
                </div>
            </div>
            <div className='user-arrow'>
                <button><i className='fas fa-angle-right'></i></button>
            </div>
        </div>
     );
}
 
export default User;
import React, {useState, useContext, useEffect} from 'react';
import { UserContext } from "../contexts/UserContext";
import { useParams } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import { FaArrowLeft } from 'react-icons/fa';
import { useHistory } from 'react-router';

const UserDetails = () => {
    const {users} = useContext(UserContext);
    const {user_id} = useParams();
    const history = useHistory();

    const [userDetails, setUserDetails] = useState(null); 


    useEffect(()=> {
        setUserDetails(users.find(user => user.cell === user_id))
    }, [user_id, users])

    const userDet = userDetails? (
        <Dashboard>
            <div className='animate__animated animate__fadeInUp'>
            <h2 style={{paddingLeft: '60px'}}>User List</h2>
            <p style={{paddingLeft: '60px'}}>Filter by</p>
            <div className='filterby' style={{paddingLeft: '60px'}}>
                <input type='search' placeholder='Find in list' style={{padding: '7px', borderRadius: '12px'}}/>
            </div>

            <p style={{marginLeft: '60px', cursor: 'pointer'}} onClick={() => history.goBack()}> <FaArrowLeft style={{color: '#30BBB5'}}/> RESULTS</p>

            <div className='user-detail' key={userDetails.cell}>
                <div className='user-dp'>
                    <img src={userDetails.picture.large} alt='user-img'/>
                </div>

                <div className='user-details'>
                    <p style={{marginTop:'0', fontSize: '20px'}}><b>{userDetails.name.title} {userDetails.name.first} {userDetails.name.last} </b> {userDetails.dob.age}</p>
                    <address>{userDetails.location.street.number} {userDetails.location.street.name} {userDetails.location.state}</address>
                    <p className='mail'><i className='fas fa-envelope-square'></i> {userDetails.email}</p>
                    <p className='joined'>JOINED: {userDetails.registered.date}</p>
                    <p className='phone'> <i className='fas fa-phone-volume'></i> {userDetails.phone}</p>
                    <p className='phone'> <i className="fas fa-mobile"></i>{userDetails.phone}</p>
                </div>
            </div>
            </div>
            
        </Dashboard>
    ) : (
        <h3 style={{textAlign: 'center'}}>Nothing to see here</h3>
    )

    return ( 
        <div>{userDet}</div>
     ); 
}
 
export default UserDetails;
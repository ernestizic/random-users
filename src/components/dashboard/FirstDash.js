import React, {useContext} from 'react';
import { UserContext } from '../contexts/UserContext';
import SearchUser from '../ui/SearchUser';
import { FaUsers, FaMale, FaFemale } from 'react-icons/fa';

const FirstDash = () => {
    const {allUsers, maleUsers, femaleUsers} = useContext(UserContext);
    return ( 
        <div className="dashboard">
            <p style={{fontSize: 30, color: '#fff'}}>Hello, <b> Emerald </b></p>
            <p>Welcome to your dashboard, kindly sort through the user base</p>

            <SearchUser />
            
            <h4 style={{padding: 20}}>Show Users</h4>
            <div className="show-users">
                
                <div className="all">
                    <button onClick={allUsers} style={{backgroundColor: '#F935A9', border: 'none'}}><FaUsers style={{fontSize: '40px'}}/></button>
                    <p><small>All Users</small></p>
                </div>
                <div className="male">
                    <button onClick={maleUsers} style={{background: '#30BBB5', border: 'none'}}><FaMale style={{fontSize: '40px'}}/></button>
                    <p><small>Male Users</small></p>
                </div>
                <div className="female">
                    <button onClick={femaleUsers} style={{background: '#7946C1', border: 'none'}}><FaFemale style={{fontSize: '40px'}}/></button>
                    <p><small>Female Users</small></p>
                </div>
                
            </div>
        </div>
     );
}
 
export default FirstDash;
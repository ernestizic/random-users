import React, {useContext} from 'react';
import SearchUser from '../ui/SearchUser';
import { FaUsers, FaMale, FaFemale } from 'react-icons/fa';
//import propTypes from 'prop-types';
import { UserContext } from '../contexts/UserContext';


const Dashboard = ({children}) => {
    const {allUsers, maleUsers, femaleUsers} = useContext(UserContext)
    return ( 
        <div className="container">
            <div className="dashboard">
                <p style={{fontSize: 30, color: '#fff'}}>Hello, <b> Emerald </b></p>
                <p>Welcome to your dashboard, kindly sort through the user base</p>

                <SearchUser />
                
                <h4 style={{padding: 20}}>Show Users</h4>
                <div className="show-users">
                    
                    <div className="all">
                        <button style={{backgroundColor: '#F935A9', border: 'none'}} onClick={allUsers}><FaUsers style={{fontSize: '40px'}}/></button>
                        <p><small>All Users</small></p>
                    </div>
                    <div className="male">
                        <button style={{background: '#30BBB5', border: 'none'}} onClick={maleUsers}><FaMale style={{fontSize: '40px'}}/></button>
                        <p><small>Male Users</small></p>
                    </div>
                    <div className="female">
                        <button style={{background: '#7946C1', border: 'none'}} onClick={femaleUsers}><FaFemale style={{fontSize: '40px'}}/></button>
                        <p><small>Female Users</small></p>
                    </div>
                    
                </div>
            </div>
            
            <div className="side-dash">
                {children}
            </div>
        </div>
     );
}
/*
Dashboard.propTypes = {
    children: propTypes.arrayOf(propTypes.element).isRequired
}*/
 
export default Dashboard;
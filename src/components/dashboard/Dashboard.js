import React from 'react';
import UserContextProvider from '../contexts/UserContext';
import FirstDash from './FirstDash';
import SideDash from './SideDash';


const Dashboard = () => {
    
    return ( 
        <div className="container">
            <UserContextProvider>
                <FirstDash />
            </UserContextProvider>
            
            <div className="side-dash">
                <SideDash />
            </div>
        </div>
     );
}
 
export default Dashboard;
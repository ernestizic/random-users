import React from 'react';
import FirstDash from './FirstDash';
import SideDash from './SideDash';


const Dashboard = () => {
    
    return ( 
        <div className="container">
            <FirstDash />
            
            <div className="side-dash">
                <SideDash />
            </div>
        </div>
     );
}
 
export default Dashboard;
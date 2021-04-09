import React from 'react';
import SearchUser from '../ui/SearchUser';
import UserImage from '../../img/terry.jpg'
import UsersList from '../users/UsersList';
import UserContextProvider from '../contexts/UserContext';

const Dashboard = () => {
    return ( 
        <div className="container">
            <div className="dashboard">
                <p style={{fontSize: 30, color: '#fff'}}>Hello, <b> Emerald </b></p>
                <p>Welcome to your dashboard, kindly sort through the user base</p>

                <SearchUser />

                <div className="show-users">
                    <h4 style={{padding: 20}}>Show Users</h4>
                    <button style={{backgroundColor: '#F935A9'}}><i className="fas fa-users"></i></button>
                    <button style={{background: '#30BBB5'}}><i className="fas fa-male"></i></button>
                    <button style={{background: '#7946C1'}}><i className="fas fa-female"></i></button>
                </div>
            </div>

            <div className="side-dash">
                <h2>All Users</h2>
                <p style={{paddingLeft: '60px'}}>Filter by</p>
                <div className='filterby' style={{paddingLeft: '60px'}}>
                    <input type='search' placeholder='Find in list' style={{padding: '7px', borderRadius: '12px'}}/>
                </div>
                
                <UserContextProvider>
                    <UsersList />
                </UserContextProvider>
            </div>
        </div>
     );
}
 
export default Dashboard;
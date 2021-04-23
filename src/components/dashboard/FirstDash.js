import React, {useContext} from 'react';
import { UserContext } from '../contexts/UserContext';
import SearchUser from '../ui/SearchUser';

const FirstDash = () => {
    const {fetchMaleUsers} = useContext(UserContext);
    return ( 
        <div className="dashboard">
            <p style={{fontSize: 30, color: '#fff'}}>Hello, <b> Emerald </b></p>
            <p>Welcome to your dashboard, kindly sort through the user base</p>

            <SearchUser />

            <div className="show-users">
                <h4 style={{padding: 20}}>Show Users</h4>
                <button style={{backgroundColor: '#F935A9', border: 'none'}}><i className="fas fa-users"></i></button>
                <button onClick={fetchMaleUsers} style={{background: '#30BBB5', border: 'none'}}><i className="fas fa-male"></i></button>
                <button style={{background: '#7946C1', border: 'none'}}><i className="fas fa-female"></i></button>
            </div>
        </div>
     );
}
 
export default FirstDash;
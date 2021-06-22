import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import UsersList from '../users/UsersList';
import { motion } from 'framer-motion';

const AllUsers = () => {
    const {gender} = useContext(UserContext)
    return ( 
        <motion.div className='all-users'
            initial={{ y : "-100vh" }}
            animate={{ y : 0 }}
        >
            <h2>{gender}</h2>
            <p style={{paddingLeft: '60px'}}>Filter by</p>
            <div className='filterby' style={{paddingLeft: '60px'}}>
                <input type='search' placeholder='Find in list' style={{padding: '7px', borderRadius: '12px'}}/>
            </div>
            <UsersList />
        </motion.div>
     );
}
 
export default AllUsers;
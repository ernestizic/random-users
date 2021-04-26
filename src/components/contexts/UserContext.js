import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [gender, setGender] = useState('All');


    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async (gender)=> {
        let URL;
        if (gender) {
            URL = `https://randomuser.me/api/?gender=${gender}`
        } else {
            URL = 'https://randomuser.me/api/?results=3'
        }
        setIsLoading(true)
        const res = await axios.get(URL)
        console.log(res.data.results)
        setUsers(res.data.results);
        setIsLoading(false)
    } 

    /*
    const fetchUsers = async (gender) => {
        setIsLoading(true);
        const url = `https://randomuser.me/api/${gender ?  `?gender=${gender}`: ""}`;
        const res = await axios.get(url);
        setUsers(res.data.results);
        setIsLoading(false);
      };
      */

    //all users
    const allUsers =()=> {
        fetchUsers("");
        setGender('All')
    };

    //male users
    const maleUsers =()=> {
        fetchUsers("male");
        setGender('Male')
    };

    //female users
    const femaleUsers =()=> {
        fetchUsers("female");
        setGender('Female')
    };


    return ( 
        <UserContext.Provider value={{users, isLoading, gender, allUsers, maleUsers, femaleUsers}}>
            {props.children}
        </UserContext.Provider>
     );
}
 
export default UserContextProvider;
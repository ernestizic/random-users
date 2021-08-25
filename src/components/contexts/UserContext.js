import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [gender, setGender] = useState('All Users')
    const [clonedUsers, setClonedUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage] = useState(3)


    //Get current users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = clonedUsers.slice(indexOfFirstUser, indexOfLastUser);

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        setClonedUsers(users);
    }, [users]);

    const fetchUsers = async () => {
        try{
            setIsLoading(true);
            const URL = `https://randomuser.me/api/?results=100`
            const res = await axios.get(URL);
            setUsers(res.data.results);
            setIsLoading(false);
        }catch(err) {
            console.error(err);
            setIsLoading(true);
        };
    }

    /*
    const fetchUsers = async (gender)=> {
        let URL;
        if (gender) {
            URL = `https://randomuser.me/api/?page=3&gender=${gender}&results=100&seed=foobar`
        } else {
            URL = 'https://randomuser.me/api/?page=3&results=100&seed=foobar'
        }
        setIsLoading(true)
        const res = await axios.get(URL)
        //console.log(res.data.results)
        setUsers(res.data.results);
        setIsLoading(false)
    } */
    
    /******** a test by my Oga, Nonso.js ********/
    /*
    const fetchUsers = async (gender) => {
        setIsLoading(true);
        const url = `https://randomuser.me/api/${gender ?  `?gender=${gender}`: ""}`;
        const res = await axios.get(url);
        setUsers(res.data.results);
        setIsLoading(false);
      };
      */
     const getQuery =(q)=> {
        setClonedUsers(users.filter(user => user.name.first.toLowerCase().includes(q.toLowerCase())))
     }

    //all users
    const allUsers =()=> {
        setClonedUsers(users);
        setGender('All Users')
    };

    //male users
    const maleUsers =()=> {
        setClonedUsers(users.filter(user => user.gender ==='male'))
        setGender('Male Users')
    };

    //female users
    const femaleUsers =()=> {
        setClonedUsers(users.filter(user => user.gender ==='female'))
        setGender('Female Users')
    };
    //Change page
    const next =()=> {
        setCurrentPage(currentPage + 1)
    }
    const prev =()=> {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }else{
            setCurrentPage(1)
        }
    }

    return ( 
        <UserContext.Provider value={{users, isLoading, currentUsers, gender, allUsers, maleUsers, femaleUsers, getQuery, prev, next}}>
            {props.children}
        </UserContext.Provider>
     );
}
 
export default UserContextProvider;
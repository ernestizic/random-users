import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [clonedUsers, setClonedUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [gender, setGender] = useState('All Users');
    //const [currentPage, setCurrentPage] = useState(1)
    //const [usersPerPage, setUsersPerPage] = useState(3)


    //Get current users
    //const indexOfLastUser = currentPage * usersPerPage;
    //const indexOfFirstUser = indexOfLastUser - usersPerPage;
    //const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        setClonedUsers(users);
    }, [users]);

    const fetchUsers = async () => {
        try{
            setIsLoading(true);
            const URL = `https://randomuser.me/api/?page=3&results=100&seed=foobar`
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
            URL = `https://randomuser.me/api/?gender=${gender}&results=3`
        } else {
            URL = 'https://randomuser.me/api/?results=3'
        }
        setIsLoading(true)
        const res = await axios.get(URL)
        console.log(res.data.results)
        setUsers(res.data.results);
        setIsLoading(false)
    } 
    */
    
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
        //setClonedUsers( currentUsers );
        setGender('All Users');
    };

    //male users
    const maleUsers =()=> {
        setClonedUsers(users.filter(user => user.gender === 'male'));
        //setClonedUsers(currentUsers.filter(user => user.gender === 'male'));
        setGender('Male Users');
    };

    //female users
    const femaleUsers =()=> {
        setClonedUsers(users.filter(user => user.gender === 'female'));
        //setClonedUsers(currentUsers.filter(user => user.gender === 'female'));
        setGender('Female Users');
    };

    
    const userDetail =(cell)=> {
        setClonedUsers(users.filter(user => user.cell === cell ))
        //setClonedUsers(currentUsers.filter(user => user.cell === cell ))
        setGender("User List")
    }

    const back =()=> {
        setClonedUsers(users)
    }


    return ( 
        <UserContext.Provider value={{users, isLoading, gender, clonedUsers, getQuery, allUsers, maleUsers, 
        femaleUsers, userDetail, back}}>
            {props.children}
        </UserContext.Provider>
     );
}
 
export default UserContextProvider;
import React, {useState, useContext} from 'react';
import { UserContext } from '../contexts/UserContext';

const FindUser = () => {
    const {getQuery} = useContext(UserContext)
    const [text, setText] = useState('')
    
    const onChange =(e)=> {
        setText(e)
        getQuery(e)
    }
    return (
        <input 
            style={{padding: '7px'}}
            type='search'
            placeholder='Find in list'
            value={text}
            onChange={(e)=> onChange(e.target.value)}
        />
    )
}

export default FindUser

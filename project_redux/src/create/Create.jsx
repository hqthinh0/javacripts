import React, { useState } from 'react';
import { addUser } from '../userReducer/Reducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const users = useSelector((state) => state.users);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch(addUser({id: users[users.length - 1].id + 1 , name: name, email: email}))
        navigate("/");
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-item-center'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">name</label>
                        <input type="text" name='name' onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input type="text" name='email' onChange={e => setEmail(e.target.value)} />
                    </div>
                    <button>submit</button>
                </form>
            </div>
        </div>
    );
}

export default Create;

import React, { use, useState } from 'react';
import { Updates } from '../userReducer/Reducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';


const Update = () => {

    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const settingsUser = users.filter(f => f.id == id);
    const {name, email} = settingsUser[0];

    const [updateName , setUpdateName] = useState(name);
    const [updateEmail, setUpdateEmail] = useState(email);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(Updates({
            id: id,
            name:updateName,
            email: updateEmail,
            
        }));

        navigate('/');
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-item-center'>
        <div>
            <form onSubmit={handleUpdate} >
                <div>
                    <label htmlFor="name">name</label>
                    <input type="text" name='name' onChange={e => setUpdateName(e.target.value)} value={updateName} />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input type="text" name='email' onChange={e => setUpdateEmail(e.target.value)} value={updateEmail} />
                </div>
                <button>submit</button>
            </form>
        </div>
    </div>
    );
}

export default Update;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Delete } from '../userReducer/Reducer';
import { userList } from '../Data/Data';
import { Link } from 'react-router-dom';


const Home = () => {

    const user = useSelector((state) => state.users);
    console.log("user",user);
    const dispatch = useDispatch();

    const handleDelete = (id) =>{
        dispatch(Delete(
            {
                id: id,
            }
        ))
    }
    

    return (
        <div className='container'>
            <h2>CRUD</h2>
            <Link to="/create" className='btn btn-success my-3'> create + </Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                {user.map((user, index) =>(
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/edit/${user.id}`} >edit</Link>
                            <button onClick={() => handleDelete(user.id)} >delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
      
    );
}

export default Home;

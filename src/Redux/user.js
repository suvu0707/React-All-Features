// User.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser, updateUser, deleteUser } from './useractions';

function User() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.Userlist.users);

  const [name, pickName] = useState("")
  const [photo, pickPhoto] = useState("")
  const [details, pickDetails] = useState("")
  const [qty, pickQty] = useState("")
  const [price, pickPrice] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const addUserHandler = () => {
    const newUser = { name, price, qty,details ,photo};
    dispatch(addUser(newUser));
    pickName("")
    pickPhoto("")
    pickDetails("")
    pickQty("")
    pickPrice("")
  };

  const updateUserHandler = (user) => {
    dispatch(updateUser(user));
  };

  const deleteUserHandler = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div>
      <h1>User Management</h1>
      <div>
            <input placeholder='Name' value={name} onChange={e => pickName(e.target.value)} />
            <input placeholder='Price' value={price} onChange={e => pickPrice(e.target.value)} />
            <input placeholder='Quantity' value={qty} onChange={e => pickQty(e.target.value)} />
            <input placeholder='Photo' value={photo} onChange={e => pickPhoto(e.target.value)} />
            <input placeholder='Details' value={details} onChange={e => pickDetails(e.target.value)} />
        <button onClick={addUserHandler}>Add User</button>
      </div>
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Photo</th>
            <th>Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.price}</td>
              <td>{user.qty}</td>
              <td>{user.details}</td>
              <td>{user.photo}</td>
              <td>
                <button onClick={() => updateUserHandler(user)}>Edit</button>
                <button onClick={() => deleteUserHandler(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;

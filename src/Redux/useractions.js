// actions.js
import axios from 'axios';

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:1234/itemlist');
      dispatch({ type: 'FETCH_USERS', payload: response.data });
    } catch (error) {
      console.error('Error fetching users', error);
    }
  };
};

export const addUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:1234/itemlist', user);
      dispatch({ type: 'ADD_USER', payload: response.data });
    } catch (error) {
      console.error('Error adding user', error);
    }
  };
};

export const updateUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`http://localhost:1234/itemlist/${user.id}`, user);
      dispatch({ type: 'UPDATE_USER', payload: response.data });
    } catch (error) {
      console.error('Error updating user', error);
    }
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:1234/itemlist/${userId}`);
      dispatch({ type: 'DELETE_USER', payload: userId });
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };
};

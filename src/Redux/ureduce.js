// const Userlist=(state=[],action)=>{
//     var oldnewdata=Object.assign([],state);
//     if(action.type=='uadd'){
//         oldnewdata.push(action.userinfo)
//     }
//     if(action.type=='udelete'){
//         oldnewdata.splice(action.userindex,1)
//     }
//     console.log(oldnewdata)
//     return oldnewdata;
// }

// export default Userlist;

const initialState = {
    users: [],
  };
  
  const Userlist = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USERS':
        return { ...state, users: action.payload };
      case 'ADD_USER':
        return { ...state, users: [...state.users, action.payload] };
      case 'UPDATE_USER':
        const updatedUsers = state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        );
        return { ...state, users: updatedUsers };
      case 'DELETE_USER':
        const filteredUsers = state.users.filter((user) => user.id !== action.payload);
        return { ...state, users: filteredUsers };
      default:
        return state;
    }
  };

  export default Userlist
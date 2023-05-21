const Userlist=(state=[],action)=>{
    var oldnewdata=Object.assign([],state);
    if(action.type=='uadd'){
        oldnewdata.push(action.userinfo)
    }
    if(action.type=='udelete'){
        oldnewdata.splice(action.userindex,1)
    }
    console.log(oldnewdata)
    return oldnewdata;
}

export default Userlist;
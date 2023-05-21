const Booklist=(state=[],action)=>{
    var oldnewdata=Object.assign([],state);
    if(action.type=="add"){
        oldnewdata.push(action.bookinfo)
    }
    if(action.type=="delete"){
        oldnewdata.splice(action.bookindex,1)
    }

    return oldnewdata


}

export default Booklist
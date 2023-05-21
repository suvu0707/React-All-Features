var input={id:1}
var requestOptions={
    method:"POST",
    header:{"Content-Type":"application/json"},
    body:JSON.stringify(input)
}

fetch("hdhgsh",requestOptions)
.then(res=>res.json)
.then(data=>{
    updateFunc(data)
})


input
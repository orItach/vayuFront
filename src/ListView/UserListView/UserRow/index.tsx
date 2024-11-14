import axios from "axios";
import React from "react";


export const UserRow=(user:User)=> {
    const deleteUser = ()=>{axios.delete(`http://localhost:3001/users/deleteUser?userId=${user.id}`)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        });}
    return (<><div><p>{user.name}</p></div><button onClick={deleteUser}>delete</button> </>)

}
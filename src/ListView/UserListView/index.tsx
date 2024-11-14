import { useState,useEffect } from "react";
import { UserRow } from "./UserRow/index.tsx";
import React from "react";
import axios from "axios";

export const UserListView =()=>{
    const [pageNumber,setPageNumber]=useState(0)
    useEffect(() => {
      console.log(pageNumber)
      axios.get(`http://localhost:3001/users?pageNumber=${pageNumber}`)
          .then(function (response) {
            console.log(response)
            setUsers(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
      }, [pageNumber]);
    const [users,setUsers]=useState<User[]>([])
    return (<>
      <div>{users.map(user=><UserRow key={user.id} {...user}></UserRow>)}</div>
      <div>{[0,1,2,3,4,5].map(pageNumber=><button onClick={(e)=>setPageNumber(e.target.value)} value={pageNumber}>{pageNumber}</button>)}</div>
      </>)


  }
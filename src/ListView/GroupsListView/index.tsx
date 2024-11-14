import { useState,useEffect } from "react";
import { GroupRow } from "./GroupRow/index.tsx";
import React from "react";
import axios from "axios";

export const GroupsListView =()=>{
    const [pageNumber,setPageNumber]=useState(0)
    useEffect(() => {
      axios.get('http://localhost:3001/groups')
          .then(function (response) {
            console.log(response)
            setGroups(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
        //Runs only on the first render
      }, [pageNumber]);
    const [groups,setGroups]=useState<Group[]>([])
    return (<>
      <div>{groups.map(group=><GroupRow key={group.id} {...group}></GroupRow>)}</div>
      <div>{[0,1,2,3,4,5].map(pageNumber=><button onClick={(e)=>setPageNumber(Number.parseInt((e.target as HTMLInputElement).value))} value={pageNumber}>{pageNumber}</button>)}</div>
      </>)


  }
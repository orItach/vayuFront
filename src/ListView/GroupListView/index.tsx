import { useState,useEffect } from "react";
import { GroupRow } from "./GroupRow";
import React from "react";

const GroupListView =()=>{
    const [pageNumber,setPageNumber]=useState(1)
    useEffect(() => {
        //Runs only on the first render
      }, [pageNumber]);
    const [groups,setGroups]=useState<Group[]>([])
    return (<>
      <div>{groups.map(group=><GroupRow {...group}></GroupRow>)}</div>
      <div>{[1,2,3,4,5].map(pageNumber=><button onClick={(e)=>setPageNumber(e.target.value)} value={pageNumber}>pageNumber</button>)}</div>
      </>)


  }
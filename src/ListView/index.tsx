import { useState } from "react"
import { GroupsListView } from "./GroupsListView/index.tsx"
import React from "react"
import { UserListView } from "./UserListView/index.tsx"

export const ListView =()=>{
    const [showUser,setShowUser]=useState(true)
    return(<>
        <button onClick={(e)=>setShowUser(true)}>show user</button>
        <button onClick={(e)=>setShowUser(false)}>show group</button>
        {showUser? <UserListView/>:
        <GroupsListView/>}
        </>
    )
}
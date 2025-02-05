import React from 'react'



export const UserPage = async () => {
    const res= await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return (
    <>
    <h1>Users</h1>
    
    </>
  )
}
export default UserPage;
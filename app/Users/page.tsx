import { revalidatePath } from 'next/cache';
import React from 'react'

interface Users {
  id: number;
  name: string;
}

export const UserPage = async () => {
    const res= await fetch("https://jsonplaceholder.typicode.com/users");
    const users: Users[] = await res.json();
    return (
    <>
    <h1>Users</h1>
    <ul>
      <p>{new Date().toLocaleTimeString()}</p>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
    
    </>
  )
}
export default UserPage;
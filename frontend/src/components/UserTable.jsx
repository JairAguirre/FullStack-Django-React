import React from 'react'

const UserTable = (props) => {


  return (

    <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>last Name</th>
            <th>Username</th> 
            <th>email</th> 
            <th>Status</th> 
            <th>Created_at</th>
            <th>updated_at</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
          props.users.length > 0 ?
          props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.last_name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.status}</td>
            <td>{user.created_at}</td>
            <td>{user.updated_at}</td>
            <td>
              
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        )) : (

          <tr>
          <td colSpan={3}>No users</td>
        </tr>
        )



        }
        
        
        </tbody>
      </table>
    
  );
}
  
export default UserTable
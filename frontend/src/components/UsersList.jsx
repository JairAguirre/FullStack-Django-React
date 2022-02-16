import React, { useEffect, useState } from 'react';
import * as UsersServer from './usersServer'

const UserList = () => {

const initialstate = {id:0, name: "", last_name: "", username: "", email : "",   status : "", created_at: "", updated_at: ""}
  

const [users, setUsers] = useState(initialstate)

const listaUsuarios = async () => {

    try{

      const res = await UsersServer.listUSers();
      const data = await res.json();
      setUsers(data)
     
    }catch(error){
        console.log(error)

    }

}

    useEffect(() => {
    listaUsuarios()
    }, [])

    return(
        
        <div>
            {/* {
             users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.last_name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <td>{user.created_at}</td>
              <td>{user.updated_at}</td>
            </tr>
          ))

            } */}

        </div>
        

    )

}

export default UserList;
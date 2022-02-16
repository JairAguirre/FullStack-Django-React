import React, { useEffect, useState } from 'react';
import UserTable from './components/UserTable';
import * as UsersServer from './components/usersServer'
import UserItem from './components/UserItem';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUSerForm';



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
function App() {


  //Estado
  const [users, setUsers] = useState([])

  //Agregar usuario
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])

  }

  


useEffect(() => {
  listaUsuarios()
  }, [])


  const listaUsuarios = async () => {
    try{

      const res = await UsersServer.listUSers();
      const data = await res.json();
      setUsers(data)
  
    }catch(error){
        console.log(error)

    }

}
  return (
    <Router>
    <div className="container mt-5">
    <h1>CRUD for USers </h1>
    <div className="btn-group">
     
      <NavLink to= "/verusuarios" className='btn btn-dark' activeClassName="active">
        Ver Usuarios
      </NavLink>
      <NavLink to= "/editarusuario" className='btn btn-dark' activeClassName="active">
        Editar USuario
      </NavLink>
      <NavLink to= "/adduser" className='btn btn-dark' activeClassName="active">
        Agregar Usuario
      </NavLink>

    </div>
    <hr />
        <Switch>
          <Route path= "/adduser">

          <AddUserForm addUser={addUser} />
          </Route>
          <Route path= "/verusuarios">
            
            <UserTable users ={users}></UserTable>
            </Route>
            <Route path= "/editarusuario">
            
                <EditUserForm></EditUserForm>
            </Route>
            <Route path= "/"></Route>

        </Switch>
  </div>
  </Router>
  );
}

export default App;

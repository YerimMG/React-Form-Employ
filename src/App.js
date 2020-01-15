import React from 'react';
import UseNavbar from './components/navbar/navbar';
import { Route, Switch, MemoryRouter } from 'react-router-dom';
import Crud from './views/crud/Crud';
import UserList from './views/usersList/UserList';
function App() {
  return (
    <MemoryRouter>
      <UseNavbar></UseNavbar>
      <div>
        <Switch>
          <Route exact path="/" component={Crud} />
          <Route path="/list" component={UserList} />
        </Switch>
      </div>
    </MemoryRouter>
  );
}

export default App;

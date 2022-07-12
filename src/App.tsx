import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import TodoItemPage from './components/TodoItemPage';
import TodoPage from './components/TodoPage';
import UserItemPage from './components/UserItemPage';
import UserPage from './components/UserPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to='/users'>Users</NavLink>
          <NavLink to="/todos">Todos</NavLink>
        </div>
        <Route path={'/users'} exact>
          <UserPage />
        </Route>
        <Route path={'/todos'} exact>
          <TodoPage />
        </Route>
        <Route path={'/users/:id'}>
          <UserItemPage />
        </Route>
        <Route path={'/todos/:id'}>
          <TodoItemPage />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;

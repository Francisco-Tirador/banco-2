import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import ProtectRoutes from './toolkit/ProtectRoutes'
import DataUserForm from './pages/DataUserForm'

const App = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      
      {/* Para las rutas protegidas, usamos un Route con render */}
      <Route
        path="/"
        render={() => (
          <ProtectRoutes>
            <DataUserForm />
          </ProtectRoutes>
        )}
      />
    </Switch>
  )
}

export default App
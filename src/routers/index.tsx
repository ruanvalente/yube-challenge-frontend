import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Profile from '../pages/Profile'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Login} exact />
    <Route path="/profile" component={Profile} />
  </Switch>
)

export default Routes

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { store, history } from 'store/store'

import Top from 'containers/Top'
import Archive from 'containers/Archive'

const BaseRouter = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/archive" component={Archive} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default BaseRouter

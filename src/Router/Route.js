import React, { Suspense } from 'react'

import { Switch, Route } from 'react-router-dom'

import routes, { DefaultRoute, PageNotFound } from './routes'

import { PageLoader } from 'Shared/Loader'

const AppRoute = () => {
  return (
    <Switch>
      {routes.map(({ path, Component }, index) => {
        return (
          <Route key={index} exact path={path}>
            <Suspense fallback={<PageLoader />}>
              <Component />
            </Suspense>
          </Route>
        )
      })}

      <Route exact path="/">
        <Suspense fallback={<PageLoader />}>
          <DefaultRoute />
        </Suspense>
      </Route>

      <Route>
        <Suspense fallback={<PageLoader />}>
          <PageNotFound />
        </Suspense>
      </Route>
    </Switch>
  )
}

export default AppRoute

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header, CustomCursor } from './utils'
import { HomeBanner } from './pages/HomePage'

export const App = () => {
  return (
    <>
      <CustomCursor />
      <Header />
      <Switch>
        <Route path="/">
          <HomeBanner />
        </Route>
      </Switch>
    </>
  )
}

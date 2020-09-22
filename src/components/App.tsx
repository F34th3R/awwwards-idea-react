import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header, CustomCursor, Navigation } from './utils'
import { HomeBanner } from './pages/HomePage'

export const App = () => {
  return (
    <>
      <CustomCursor />
      <Header />
      <Navigation />
      <Switch>
        <Route path="/">
          <HomeBanner />
        </Route>
      </Switch>
    </>
  )
}

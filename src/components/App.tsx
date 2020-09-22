import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { Header, CustomCursor, Navigation } from './utils'
import { HomeBanner } from './pages/HomePage'
import { toggleMenuState } from '../states'

export const App = () => {
  const toggleMenu = useRecoilValue(toggleMenuState)
  return (
    <>
      <CustomCursor />
      <Header />
      {toggleMenu && <Navigation />}
      <Switch>
        <Route path="/">
          <HomeBanner />
        </Route>
      </Switch>
    </>
  )
}

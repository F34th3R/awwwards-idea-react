import React, { createContext, useContext } from 'react'
import { useMenu } from '../hooks/useMenu'

interface MenuContextProps {
  toggleMenu: boolean
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuContext = createContext<MenuContextProps>(
  {} as MenuContextProps
)

export const MenuProvider: React.FC = ({ children }) => {
  const { toggleMenu, setToggleMenu } = useMenu()

  return (
    <MenuContext.Provider value={{ toggleMenu, setToggleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenuValues = () => useContext(MenuContext)

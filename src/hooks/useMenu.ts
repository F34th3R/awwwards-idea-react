import { useState } from 'react'

export const useMenu = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)

  return { toggleMenu, setToggleMenu }
}

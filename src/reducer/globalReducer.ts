export interface StateI {
  currentTheme: string
  cursorType: boolean
  cursorStyles: string[]
}

export interface ActionI {
  type: string
  theme: string
}

export const globalReducer = (state: StateI, action: ActionI) => {
  switch (action.type) {
    case 'TOGLE_THEME': {
      return {
        ...state,
        currentTheme: action.theme
      }
    }
    // case 'CURSOR_TYPE': {
    //   return {
    //     ...state,
    //     cursorType: action.cursorType
    //   }
    // }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

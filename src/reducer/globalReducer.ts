export interface ActionI {
  type: string
  theme: any
}

export interface StateI {
  currentTheme: string
  cursorStyles: string[]
  cursorType: boolean
}

export const globalReducer = (state: StateI, action: ActionI) => {
  switch (action.type) {
    case 'TOGLE_THEME': {
      return {
        ...state,
        currentTheme: action.theme
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

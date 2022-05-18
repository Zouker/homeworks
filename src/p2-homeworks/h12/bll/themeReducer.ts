const initState = {
    theme: 'default',
    themes: ['dark', 'light', 'red', 'yellow', 'green', 'gold', 'texture', 'default']
};

export type ThemeStateType = {
    theme: string,
    themes: Array<string>
}

export const themeReducer = (state: ThemeStateType = initState, action: ActionType): ThemeStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-COLOR': {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

type ActionType = {
    type: 'CHANGE-COLOR',
    theme: string,
}

export const changeThemeC = (theme: string): ActionType => {
    return {type: 'CHANGE-COLOR', theme} as const
}; // fix any
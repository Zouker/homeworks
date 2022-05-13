const initState = {
    isLoading: false
}

export type PropsType = {
    isLoading: boolean
}

export const loadingReducer = (state: PropsType = initState, action: ActionType): PropsType => { // fix any
    switch (action.type) {
        case 'LOADING':
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

type ActionType = {
    type: 'LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): ActionType => {
    return {
        type: 'LOADING',
        isLoading,
    } as const
} // fix any
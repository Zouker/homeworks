import {initialPeople, UserType} from '../HW8';

export type ActionType = {
    type: string,
    payload: number | string
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                let state = [...initialPeople.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)]
                return state
            } else if (action.payload === 'down') {
                let state = [...initialPeople.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1)]
                return state
            }
            return state
        }
        case 'check': {
            let state = initialPeople.filter(a => a.age > action.payload)
            return state
        }
        default:
            return state
    }
}
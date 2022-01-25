import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO } from '../actions/actionType'

const initialState = {
    min: 1,
    max: 100
}

export default function NumerosReducers(state = initialState, action) {
    switch (action.type) {
        case NUM_MIN_ALTERADO:
            return {
                ...state,
                min: action.payload
            }
        case NUM_MAX_ALTERADO:
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}
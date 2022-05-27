import { useReducer } from 'react'

type CounterState = {
    count: number
}
type CounterAction = {
    type: string
    payload: number
}

const initialState = { count: 0 }
function reducer(state: CounterState, action: CounterAction) {
    if (action.type === 'increment') {
        return { count: state.count + action.payload }
    }
    if (action.type === 'decrement') {
        return {
            count: state.count - action.payload,
        }
    }
    return state
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            Count:{state.count}
            <button
                onClick={() => dispatch({ type: 'increment', payload: 10 })}
            >
                Increment by 10
            </button>
            <button
                onClick={() => dispatch({ type: 'decrement', payload: 10 })}
            >
                Decrement by 10
            </button>
        </>
    )
}

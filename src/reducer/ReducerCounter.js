import { increase } from "../type/Type"


// Step 2: Create reducer
export const reducerCounter = (state = {counter: 0}, action) => {
    if (action.type === "increase") {
        return {counter: state.counter+1}
    }
    if (action.type === "decrease") {
        return {counter: state.counter-1}
    }
    if (action.type === "reset") {
        return {counter: 0}
    }
    return state
}
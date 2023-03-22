
// Step 2: Create reducer
export const reducerAuth = (state = {isLog: false}, action) => {
    if (action.type === "isLogin") {
        return {isLog: true}
    }
    if (action.type === "NoLogin") {
        return {isLog: false}
    }
    return state
}
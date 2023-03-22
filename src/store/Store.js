import {createStore} from 'redux'
import {rootReducer} from "../reducer/rootReducer"



// Step 1 Create Store
export const allReducersStore = createStore(rootReducer)


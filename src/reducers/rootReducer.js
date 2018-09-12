import {combineReducers} from 'redux'
import {TodoListReducer} from '../todos/reducers/todoReducer'
import {faridListReducer} from '../faridList/reducers/faridListReducer';


//One root reducer for the whole app. This is done so that the app will have one single reducer to manage lots of other resources.
// And also communication between the reducers will be easier to maintain.
 
const rootReducer = combineReducers({
    todos: TodoListReducer,
    faridTodos:faridListReducer,
})

export default rootReducer

const initialState = {
    fetching_start:false,
    fetching_complete:false,
    error:false,    
    message:null,
    detailMessage:null,
    addData:false,
    faridTodos:[],
    isEdit:false,
    
}

export const faridListReducer = (state = initialState, action)=>{
    switch(action.type){
        //FETCHI DATA
        case 'FARID_FETCH_TODOS_PENDING':
        return {...state, fetching_start:true, fetching_complete:false}
        case 'FARID_FETCH_TODOS_REJECTED':
        return {...state, fetching_start:false, error:true, message:action.payload.message, detailMessage:action.payload.stack}
        case 'FARID_FETCH_TODOS_FULFILLED':
        return {...state, fetching_start:false, fetching_complete:true, faridTodos:action.payload.data.data.docs}  
        
        //CREATE DATA
        case 'FARID_CREATE_TODOS_PENDING':
        return {...state, fetching_start:true, fetching_complete:false}
        case 'FARID_CREATE_TODOS_REJECTED':
        return {...state, fetching_start:false, error:true, message:action.payload.message, detailMessage:action.payload.stack}
        case 'FARID_CREATE_TODOS_FULFILLED':
        console.log(action.payload)
        return {...state, fetching_start:false, fetching_complete:true, faridTodos:[...state.faridTodos, action.payload.data.data]}          
        
        //EDIT DATA
        case 'FARID_EDIT_TODOS_PENDING':
        return {...state, fetching_start:true, fetching_complete:false}
        case 'FARID_EDIT_TODOS_REJECTED':
        return {...state, fetching_start:false, error:true, message:action.payload.message, detailMessage:action.payload.stack}
        case 'FARID_EDIT_TODOS_FULFILLED':
        return {...state, fetching_start:false, fetching_complete:true, faridTodos:[...state.faridTodos, action.payload.data.data.docs]}
        
        
        //DELETE DATA
        case 'FARID_DELETE_TODOS_PENDING':
        return {...state, fetching_start:true, fetching_complete:false}
        case 'FARID_DELETE_TODOS_REJECTED':
        return {...state, fetching_start:false, error:true, message:action.payload.message, detailMessage:action.payload.stack}
        case 'FARID_DELETE_TODOS_FULFILLED':
        return (
            {
                ...state,
                fetching_start:false,
                fetching_complete:true,
                faridTodos:state.faridTodos.filter(faridTodos=>deleteStateTodo(faridTodos,action))
            }
        )
        
        case 'TOGGLE_ADD_DATA':
        const toggleAddData = state.addData?false:true;
        return {...state, addData:toggleAddData}
        
        case 'TOGGLE_EDIT_DATA':
        return {...state, faridTodos:state.faridTodos.map((todo)=>editModeCek(todo,action.payload))}

        case 'CANCEL_EDIT_DATA':
        return {...state, faridTodos:state.faridTodos.map((todo)=>cancelEdit(todo,action.payload))}
        
        default:
        return state
    }
}

const deleteStateTodo = (faridTodos,action)=>{
    if(faridTodos._id===action.payload.data.id){
        return false
    }

    return true
}

const editModeCek = (todo, _id)=>{
    if(todo._id===_id){
        return {
            ...todo,
            editing:true,
        }
    }

    return {
        ...todo,
        editing:false,
    }
}

const cancelEdit = (todo, _id)=>{
    return {
        ...todo,
        editing:false,
    }
}
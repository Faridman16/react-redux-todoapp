import axios from 'axios';

export const fetchTodos = ()=>(dispatch)=>{
    dispatch({
        type:'FARID_FETCH_TODOS',
        payload:axios.get('http://localhost:3000/api/todos'),
    })
}

export const createFaridTodo = (faridTodo)=>(dispatch)=>{
    dispatch({
        type:'FARID_CREATE_TODOS',
        payload:axios.post('http://localhost:3000/api/todos', faridTodo),
    })
}

export const deleteFaridTodo = (faridTodo)=>dispatch=>{
    dispatch({
        type:'FARID_DELETE_TODOS',
        payload:axios.delete('http://localhost:3000/api/todos/'+faridTodo._id)
    })
}

export const editFaridTodo = (faridTodo)=>dispatch=>{
    dispatch({
        type:'FARID_EDIT_TODOS',
        payload:axios.put('http://localhost:3000/api/todos/')
    })
}

export const toggleAddData = ()=>(dispatch)=>{
    dispatch({
        type:'TOGGLE_ADD_DATA',
        payload:null,
    })
}

export const toggleEditMode = (_id)=>(dispatch)=>{
    dispatch({
        type:'TOGGLE_EDIT_DATA',
        payload:_id,
    })
}

export const cancelEdit = (_id)=>(dispatch)=>{
    dispatch({
        type:'TOGGLE_EDIT_DATA',
        payload:_id,
    })
}
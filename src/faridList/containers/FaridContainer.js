import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FaridTable from '../components/FaridTable';
import * as faridTodoAction from '../actions/faridTodoActions';
import {Button} from 'semantic-ui-react';
import moment from 'moment';
import { bindActionCreators } from 'redux';

export class FaridContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      _id:'',
      title:'',
      description:'',
      date:moment(),
    }
  }

  componentWillMount(){
    this.props.fetchTodos();
  }

  handleClick = ()=>{
    this.props.toggleAddData();
  }

  handleChange = (e)=>{
    this.setState({
        [e.target.name]:e.target.value,
    })
  }  

  handleSubmit = (e)=>{
    e.preventDefault();
    const objFaridTodo = {
        title:this.state.title,
        description:this.state.description,
        date:this.state.date,
    }

    this.setState({
      _id:'',
      title:'',
      description:'',
      date:moment(),
    })
    this.props.createFaridTodo(objFaridTodo)
    
  }  

  handleEditSubmit = (e,_id)=>{
    console.log('this thing is called')
    console.log(e)
    console.log(_id)
    e.preventDefault();
    const objFaridTodo = {
        _id:this.state._id,
        title:this.state.title,
        description:this.state.description,
        date:this.state.date,
    }

    this.props.editFaridTodo(objFaridTodo)
    
  }   

  handleChangeDate = (e)=>{
      this.setState({date:e})
  }  

  editModeState = (todo)=>{
    this.setState({
      title:todo.title,
      description:todo.description,
      date:todo.date,      
    })
  }

  render() {
    
    return (
      <div>
        <Button onClick={this.handleClick} color='red'>Add</Button>
        {!this.props.error?
          // <form onSubmit={this.handleSubmit}>
          <FaridTable 
            listTodos={this.props.listTodos} 
            handleSubmit={this.handleSubmit}
            addData={this.props.addData}
            handleChange={this.handleChange}
            handleChangeDate={this.handleChangeDate}
            data={this.state}
            deleteFaridTodo={this.props.deleteFaridTodo}
            editFaridTodo={this.props.editFaridTodo}
            isEdit={this.props.isEdit}
            editModeState={this.editModeState}
            toggleEditMode={this.props.toggleEditMode}
            toggleAddData={this.props.toggleAddData}
            cancelEdit={this.props.cancelEdit}
            handleEditSubmit={this.handleEditSubmit}
          />
          // </form>
            :
          (<div>
            <h4>{this.props.message}</h4>
            <p>{this.props.detailMessage}</p>
          </div>)
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  listTodos:state.faridTodos.faridTodos,
  addData:state.faridTodos.addData,
  error:state.faridTodos.error,
  message:state.faridTodos.message,
  detailMessage:state.faridTodos.detailMessage,
  isEdit:state.faridTodos.isEdit,

})

const mapActionToProps = ()=>{
  return {
    fetchTodos:faridTodoAction.fetchTodos,
    toggleAddData:faridTodoAction.toggleAddData,
    createFaridTodo:faridTodoAction.createFaridTodo,
    deleteFaridTodo:faridTodoAction.deleteFaridTodo,
    editFaridTodo:faridTodoAction.editFaridTodo,
    toggleEditMode:faridTodoAction.toggleEditMode,
    cancelEdit:faridTodoAction.cancelEdit,
  }
}

export default connect(mapStateToProps,mapActionToProps())(FaridContainer)

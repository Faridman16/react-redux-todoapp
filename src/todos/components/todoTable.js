import React, {Component} from 'react';

import {Button, Icon, Label, Menu, Table} from 'semantic-ui-react'
import TodoRow from './todoRow'
import EditTodo from './editTodo';

// TodoTable is a Stateless component

class TodoTable extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>Options</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
    
                <Table.Body>
    
                    {/* This maps the todos recieved as a prop */}
    
                    {this.props
                        .todos
                        .map(t => {
    
                            // If the todo is being edited, EditTodo Component is rendered here
    
                            if (t.editing) {
                                return <EditTodo
                                    editTodo={this.props.editTodo}
                                    cancelEditing={e => this.props.cancelEditing(t._id)}
                                    key={t._id}
                                    todo={t}/>
                            } else {
    
                                // Is the todo is not being edited the TodoRow stateless component is returned
    
                                return <TodoRow
                                    todo={t}
                                    key={t._id}
                                    completeTodo={e => this.props.completeTodo(t)}
                                    startEditing={e => this.props.startEditing(t._id)}
                                    deleteTodo={e=> this.props.deleteTodo(t)}
                                />
                            }
                        })}
                    
                    {/* This EditTodo component is used as a Create new Todo Component */}
                    {/* Thus by using the same component for both use, we can reuse a lot of the codes */}
                    <EditTodo createTodo={this.props.createTodo} />
                </Table.Body>
    
            </Table>
            <Data todos={this.props.todos} />
            </div>
        )

    }

}

const Data = (props)=>{
    if(!props.todos){       
        console.log(props.todos) 
        return <p>No Data</p>
    }else{
        console.log('ada')
        return <p>Ada Data</p>
    }
}

export default TodoTable;
import React, { Component } from 'react'
import {Button, Table} from 'semantic-ui-react';
import FaridTableInput from './FaridTableInput';
import PropTypes from 'prop-types';

export class FaridTable extends Component {

    deleteRow = (faridTodo)=>{
        this.props.deleteFaridTodo(faridTodo)
    }

    editRow = (faridTodo)=>{
        this.props.editFaridTodo(faridTodo)
    }

    editMode = (rowTodo)=>{
        this.props.editModeState(rowTodo)
        this.props.toggleEditMode(rowTodo._id)
    }

  render() {
    const isAddData = this.props.addData;
    const isEdit = this.props.isEdit
    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell colSpan='3'>Options</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {this.props.listTodos.map((rowTodo)=>{
                    if(rowTodo.editing){
                        return <FaridTableInput 
                                    key={rowTodo._id}
                                    handleChange={this.props.handleChange}
                                    handleChangeDate={this.props.handleChangeDate}
                                    data={this.props.data}
                                    handelEditSubmit={this.props.handleEditSubmit}
                                    editing={rowTodo.editing}
                                    cancelEdit={this.props.cancelEdit}
                                />
                    }
                    return(
                        <FaridRow 
                            key={rowTodo._id}
                            rowTodo={rowTodo}
                            deleteRow={this.deleteRow}
                            editMode={this.editMode}
                            isEdit={isEdit}
                            editFaridTodo={this.props.editFaridTodo}
                        />
                    )
                })}
                {isAddData && 
                    <FaridTableInput 
                        handleChange={this.props.handleChange}
                        handleChangeDate={this.props.handleChangeDate}
                        data={this.props.data}
                        handleSubmit={this.props.handleSubmit}
                        toggleAddData={this.props.toggleAddData}
                    />
                }
            </Table.Body>
        </Table>
    )
  }
}

const FaridRow = (props)=>{
    return(
    <Table.Row>
        <Table.Cell>{props.rowTodo.title}</Table.Cell>
        <Table.Cell>{props.rowTodo.description}</Table.Cell>
        <Table.Cell>{props.rowTodo.date}</Table.Cell>
        <Table.Cell>
            {props.isEdit?
            <Button type='button' onClick={()=>{props.editFaridTodo(props.rowTodo)}}>Save</Button>
                :
            <Button type='button' onClick={()=>{props.editMode(props.rowTodo)}}>Edit</Button>}
        </Table.Cell>
        <Table.Cell><Button type='button' onClick={()=>{props.deleteRow(props.rowTodo)}}>Hapus</Button></Table.Cell>
    </Table.Row>
    )
}

FaridTable.propTypes = {
    listTodos: PropTypes.array,
    handleSubmit: PropTypes.func,
    addData: PropTypes.bool,
    handleChange: PropTypes.func,
    handleChangeDate: PropTypes.func,
    data: PropTypes.object,
    deleteFaridTodo: PropTypes.func,
    editFaridTodo: PropTypes.func,
    isEdit: PropTypes.bool,
    editModeState: PropTypes.func,
    toggleEditMode: PropTypes.func,
    toggleAddData: PropTypes.func,
    cancelEdit: PropTypes.func,
    handleEditSubmit: PropTypes.func,
}

export default FaridTable;

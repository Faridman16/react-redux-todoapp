import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {toggleAddData} from '../actions/faridTodoActions';

import {Table, Input, Button} from 'semantic-ui-react';

import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class FaridTableInput extends React.Component{

    handleReset = ()=>{
        this.props.toggleAddData();
    }

    getDate(){
        return moment(this.props.data.date)
    }

    handleEditSubmit(e,_id){
        this.props.handleEditSubmit(e,_id)
    }

    render(){
        return (
            <Table.Row>
                <Table.Cell>
                    <Input 
                        name='title'
                        placeholder='Title'
                        value={this.props.data.title}
                        onChange={this.props.handleChange}
                    />
                </Table.Cell>
                <Table.Cell>
                    <Input 
                        name='description'
                        placeholder='Description'
                        value={this.props.data.description}
                        onChange={this.props.handleChange}
                    />
                </Table.Cell>
                <Table.Cell>
                    <DatePicker 
                        name='date'
                        selected={this.getDate()}
                        onChange={this.props.handleChangeDate}
                    />                      
                </Table.Cell>
                <Table.Cell>
                    {this.props.editing?
                        <Button type='button' color='blue' onClick={(e)=>{this.handleEditSubmit(e,this.props.data._id)}}>Save</Button>                      
                            :
                        <Button type='button' color='green' onClick={this.props.handleSubmit}>Save</Button> 
                    }
                </Table.Cell>
                <Table.Cell>
                    {this.props.editing?
                        <Button type='button' color='black' onClick={this.props.cancelEdit}>Batal</Button>                      
                            :
                        <Button type='button' color='black' onClick={this.handleReset}>Cancel</Button> 
                    }
                </Table.Cell>
            </Table.Row>
        )
    }
}

FaridTableInput.prototype = {
    handleChange:PropTypes.func,
    handleChangeDate:PropTypes.func,
    data:PropTypes.object,
    handelEditSubmit:PropTypes.func,
}

export default connect(null,{toggleAddData})(FaridTableInput);
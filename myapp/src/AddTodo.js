import React, { Component } from 'react';

class AddTodo extends Component{
    state = {

    };
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.content !== undefined) {
            this.props.addTodo(this.state);
            this.setState({
                content: ''
            })
        } else {
            this.setState({
                formMessage: (<p className="text-grey">There is no task, please check input field.</p>)
            });
        }
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Add new todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                    {this.state.formMessage}
                </form>
            </div>
        );
    }
}

export default AddTodo;

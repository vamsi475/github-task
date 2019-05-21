import React, { Component } from 'react';
import axios from 'axios';


export default class Data extends Component {
    state = {
        name1: ""
    }


    onChange = (event) => {
        this.setState({ name1: event.target.value })
    }
    onClick = async (event) => {
        axios.get(`https://api.github.com/users/${this.state.name1}`).then(res => {
        this.props.onDataChange(res.data);
        this.setState({ name1: '' })
        })
    }
    render() {
        return (
            <div>
                <input type="text"
                    value={this.state.name1}
                    onChange={this.onChange}
                />
                <button onClick={this.onClick}>add</button>
            </div>
        )
    }
}

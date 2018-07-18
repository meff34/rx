import React, { Component } from 'react'

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {userId: ''};
  }

  submit = () => {
    this.props.login(this.state.userId);
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      userId: value
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.userId} onChange={this.handleChange}
          placeholder="user id"
        />
        <button onClick={this.submit}>login</button>
      </div>
    );
  }
}

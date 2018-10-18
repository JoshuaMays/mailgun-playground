import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addMember } from '../actions/index';


class MailGunner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      name: ''
    };

    this.onEmailInputChange = this.onEmailInputChange.bind(this);
    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onFormSubmit(e) {
    e.preventDefault();
    const user = {
      address: this.state.address,
      name: this.state.name
    };

    this.props.addMember(user);
    this.setState({
      address: '',
      name: ''
    });
  }

  onEmailInputChange(e) {
    this.setState({
      address: e.target.value
    });
  }

  onNameInputChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <div>
        <p>I'm Mailgunner</p>
        <form
          onSubmit={this.onFormSubmit}>
          <input
            placeholder="Email Address"
            value={this.state.address}
            onChange={this.onEmailInputChange}
            />
          <input
            placeholder="Your Name"
            value={this.state.name}
            onChange={this.onNameInputChange}
            />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMember }, dispatch);
}

function mapStateToProps({members}) {
  return { members };
}

export default connect(mapStateToProps, mapDispatchToProps)(MailGunner);


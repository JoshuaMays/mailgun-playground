import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addMember } from '../actions/index';


class MailGunner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailAddress: ''
    };

    this.onEmailInputChange = this.onEmailInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.addMember(this.state.emailAddress);
  }

  onEmailInputChange(e) {
    this.setState({
      emailAddress: e.target.value
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
            value={this.state.emailAddress}
            onChange={this.onEmailInputChange}
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


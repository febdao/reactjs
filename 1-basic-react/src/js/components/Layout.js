import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Feb',
      title: 'Welcome Feb',
    };
  }

  render() {
    setTimeout(() => {
      this.setState({name: 'Luna'});
    }, 2000);

    return (
      <div>
        My name is {this.state.name}
        <Header title={this.state.name} />
        <Header title={this.state.title} />
        <Header title='Other title' />
        <Footer />
      </div>
    );
  }
}

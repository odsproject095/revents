import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './testActions';
import { Button } from 'semantic-ui-react';

class TestComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1>Test Area</h1>
        <h2>{this.props.data}</h2>
        <Button onClick={incrementCounter} color="green" content="+1" />
        <Button onClick={decrementCounter} color="red" content="-1" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.test.data
});

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestComponent);

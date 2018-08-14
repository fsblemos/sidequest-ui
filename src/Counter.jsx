import PropTypes from 'prop-types';
import React from 'react';

const Counter = ({ counter }) => <div>{counter}</div>;

Counter.propTypes = {
  counter: PropTypes.number,
};

Counter.defaultProps = {
  counter: 0,
};

export default Counter;

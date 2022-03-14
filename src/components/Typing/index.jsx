import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

// ------------// Será implementado futuramente // ------------//

function Typing(props) {
  const {
    timer, children, color,
  } = props;

  return (
    <Container timer={timer} color={color}>
      <div>{children}</div>
    </Container>
  );
}

Typing.propTypes = {
  timer: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  color: PropTypes.string,
};
Typing.defaultProps = {
  timer: '1s',
  color: 'var(--white)',
};

export default Typing;

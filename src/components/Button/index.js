import React from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import { Container } from './styles';

export default function Button({ type, label, loading, ...rest }) {
  return (
    <Container type={type} loading={loading} {...rest}>
      {loading ? <FaSpinner color="#fff" size={14} /> : label}
    </Container>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  loading: PropTypes.number,
  type: PropTypes.string,
};

Button.defaultProps = {
  loading: 0,
  type: 'button',
};

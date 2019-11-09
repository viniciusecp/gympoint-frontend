import React from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import { Container } from './styles';

export default function SubmitButton({ label, loading, ...rest }) {
  return (
    <Container type="submit" loading={loading} {...rest}>
      {loading ? <FaSpinner color="#fff" size={14} /> : label}
    </Container>
  );
}

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
  loading: PropTypes.number,
};

SubmitButton.defaultProps = {
  loading: 0,
};

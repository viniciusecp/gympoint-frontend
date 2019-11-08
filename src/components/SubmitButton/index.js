import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function SubmitButton({ label, ...rest }) {
  return (
    <Container type="submit" {...rest}>
      {label}
    </Container>
  );
}

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
};

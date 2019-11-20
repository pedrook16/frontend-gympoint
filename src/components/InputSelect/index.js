import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import { useField } from '@rocketseat/unform';

export default function InputSelect({ name, options, ...rest }) {
  const ref = useRef();
  const { registerField, fieldName } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
    });
}, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <Select name={fieldName} options={options} ref={ref} {...rest} />
    </>
  );
}

InputSelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array,
};

InputSelect.defaultProps = {
  options: [],
};

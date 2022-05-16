import React from 'react';
import useFormValidation from './useFormValidation';

function useInput(initialValue,validations) {
  const [value, setValue] = React.useState(initialValue);
  const [isDirty, setIsDirty] = React.useState(false);
  const valid = useFormValidation(value, validations);

  function onChange(e) {
    setValue(e.target.value)
  }

  function onBlur(e) {
    setIsDirty(true)
  }

  return {
    value,
    isDirty,
    onChange,
    onBlur,
    ...valid
  }
}

export default useInput;

import React from 'react';
//import { useEffect } from 'react';
import { useCallback } from "react";

function useFormValidation() {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = (event) => {
      const target = event.target;
      const name = target.name;
      const value = target.value;
      setValues({...values, [name]: value});
      setErrors({...errors, [name]: target.validationMessage });
      setIsValid(target.closest("form").checkValidity());
    };

    const resetForm = useCallback(
      (newValues = {}, newErrors = {}, newIsValid = false) => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
      },
      [setValues, setErrors, setIsValid]
    );

    return {
      values,
      handleChange,
      errors,
      isValid,
      resetForm,
      setValues,
      setErrors,
      setIsValid
    };
}

export default useFormValidation;

/*function useFormValidation(value, validations) {
const [isEmpty, setIsEmpty] = React.useState(true);
  const [minLengthError, setMinLengthError] = React.useState(false);
  const [maxLengthError, setMaxLengthError] = React.useState(false);
  //const [isEmail, setIsEmail] = React.useState(true);
  const [isEmailError, setIsEmailError] = React.useState(false);
  const [inputValid, setInputValid] = React.useState(false);

  React.useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true)
          break;
        case 'minLength':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
          break;
        case 'maxLength':
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
          break;

        case 'isEmail':
          const re = String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ) ? setIsEmailError(false) : setIsEmailError(true);
          break;
      }
    }
  }, [value])

  React.useEffect(() => {
    if(isEmpty || isEmailError) {
      setInputValid(true)
      console.log('ok')
    } else {
      setInputValid(false)
      console.log('fuk')
    }
  }, [isEmpty, isEmailError] )

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    isEmailError,
    inputValid
  }}*/

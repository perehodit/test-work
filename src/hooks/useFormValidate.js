import { useState } from 'react';

export default function useFormValidate(object) {
  const [validateError, setValidateError] = useState(false);

  function testObject(object) {
    let errorExist = false;

    for (let key in object) {
      if (!object[key]) {
        errorExist = true;
      }
    }

    if (errorExist) {
      return true;
    } else {
      return false;
    }
  }

  function validate() {
    if (testObject(object)) {
      setValidateError(true);
      return false;
    } else {
      setValidateError(false);
      return true;
    }
  }

  return [validateError, setValidateError, validate];
}

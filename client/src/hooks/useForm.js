import { useState } from 'react';

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = e => {
    if (e.target.name === 'countries') {
      setForm({
        ...form,
        countries: [...new Set([...form.countries, e.target.value])],
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }

    console.log(form);
  };

  // const handleCountries = e => {};

  const handleBlur = e => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = e => {};

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    // handleCountries,
    handleBlur,
    handleSubmit,
  };
};

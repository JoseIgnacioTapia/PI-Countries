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

  const handleBlur = e => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleDeleteCountry = c => {
    const newArr = form.countries.filter(
      el => el.toLowerCase() !== c.toLowerCase()
    );

    setForm({
      ...form,
      countries: newArr,
    });
  };

  const handleSubmit = e => {};

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleDeleteCountry,
    handleSubmit,
  };
};

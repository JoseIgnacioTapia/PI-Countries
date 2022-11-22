import { useState } from 'react';

const URL = 'http://localhost:3001/activities';

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

  const handleSubmit = async e => {
    e.preventDefault();

    if (Object.keys(validateForm(form)).length === 0) {
      alert('Enviando formulario!');
      setLoading(true);

      // SE envía el post request , setLoading(false) y setResponse(true) con setTimeOut()
      try {
        await fetch(URL, {
          method: 'POST',
          body: JSON.stringify(form),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setLoading(false);
        setResponse(true);
        setTimeout(() => setResponse(false), 5000);
        setForm(initialForm);
      } catch (error) {
        setLoading(false);
        setResponse(error.status);
        setForm(initialForm);
      }
    } else {
      return;
    }
  };

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

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CustomDatePicker ({ field, form, ...props }) {
  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={val => form.setFieldValue(field.name, val)}
    />
  );
}

export default CustomDatePicker;

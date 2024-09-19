import * as yup from 'yup';
import CONSTANTS from '../constants';

export const ADD_PARTICIPANT_VALIDATION_SCHEMA = yup.object({
  fullName: yup
    .string()
    .trim()
    .matches(
      /^[A-Z][a-z]{1,31} [A-Z][a-z]{1,31}$/,
      'Full name must be in the format "First Last" with proper capitalization'
    )
    .required('Full name is required'),
  email: yup
    .string()
    .trim()
    .email('Invalid email address')
    .required('Email is required'),
  birthday: yup
    .date()
    .max(new Date(), 'Birthday cannot be in the future')
    .required('Birthday is required'),
  source: yup
    .string()
    .oneOf(
      CONSTANTS.SOURCES,
      `Source must be one of: ${CONSTANTS.SOURCES.join(', ')}`
    )
    .required('Choose where did you hear about this event'),
});

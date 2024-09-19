const yup = require('yup');
const { SOURCES } = require('../constants');

module.exports.ADD_PARTICIPANT_VALIDATION_SCHEMA = yup.object({
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
    .mixed()
    .oneOf(SOURCES, `Source must be one of: ${SOURCES.join(', ')}`)
    .required('Source is required'),
});

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import classNames from 'classnames';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './EventRegistrationForm.module.sass';
import { notify } from '../../utils/notification';
import { ADD_PARTICIPANT_VALIDATION_SCHEMA } from '../../utils/validationSchemas';
import {
  addEventParticipantsThunk,
  changeStatus,
  clearError,
} from '../../store/slices/participantsSlice';
import CONSTANTS from '../../constants';
import CustomDatePicker from '../CustomDatePicker';

function CreatePhoneForm ({
  status,
  error,
  addEventParticipant,
  updateStatus,
  clearErrorFromStore,
}) {
  const { id } = useParams();
  const navigate = useNavigate();

  const initialValues = {
    fullName: '',
    email: '',
    birthday: '',
    source: '',
  };

  useEffect(() => {
    if (status === CONSTANTS.STATUS.SUCCESS) {
      notify('Event registration completed');
      navigate(`/event/${id}/participants`);
    } else if (status === CONSTANTS.STATUS.ERROR) {
      for (const key in error.errors) {
        notify(error.errors[key].message, CONSTANTS.STATUS.ERROR);
      }
      clearErrorFromStore();
    }
    updateStatus(CONSTANTS.STATUS.IDLE);
  }, [status]);

  const handleSubmit = (values, formikBag) => {
    addEventParticipant({
      eventId: id,
      participant: values,
    });
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ADD_PARTICIPANT_VALIDATION_SCHEMA}
    >
      {formikProps => {
        const getInputClassNames = field => {
          return classNames(styles.input, {
            [styles.valid]:
              !formikProps.errors[field] && formikProps.touched[field],
            [styles.invalid]:
              formikProps.errors[field] && formikProps.touched[field],
          });
        };
        const fullNameClassNames = getInputClassNames('fullName');
        const emailClassNames = getInputClassNames('email');
        const birthdayClassNames = getInputClassNames('birthday');

        return (
          <Form className={styles.form}>
            <label className={styles.inputLabel}>
              <span className={styles.inputCaption}>Full name:</span>
              <Field
                className={fullNameClassNames}
                type='text'
                name='fullName'
                placeholder='Name Surname'
              />
              <ErrorMessage
                className={styles.error}
                name='fullName'
                component='span'
              />
            </label>
            <label className={styles.inputLabel}>
              <span className={styles.inputCaption}>Email:</span>
              <Field
                className={emailClassNames}
                type='email'
                name='email'
                placeholder='test@mail.com'
              />
              <ErrorMessage
                className={styles.error}
                name='email'
                component='span'
              />
            </label>
            <label className={styles.inputLabel}>
              <span className={styles.inputCaption}>Birthday:</span>
              <Field
                className={birthdayClassNames}
                type='date'
                name='birthday'
                component={CustomDatePicker}
              />
              <ErrorMessage
                className={styles.error}
                name='birthday'
                component='span'
              />
            </label>
            <div className={styles.radioButtonsContainer}>
              <span className={styles.radioButtonsCaption}>
                Where did you hear about this event?
              </span>
              <div className={styles.radioButtonsWrapper}>
                {CONSTANTS.SOURCES.map(source => (
                  <label className={styles.radioButtonLabel} key={source}>
                    <Field
                      className={styles.radioButton}
                      type='radio'
                      name='source'
                      value={source}
                      onClick={() =>
                        formikProps.setFieldTouched('source', true)
                      }
                    />
                    {source}
                  </label>
                ))}
              </div>
              <ErrorMessage
                className={styles.error}
                name='source'
                component='span'
              />
            </div>

            <button className={styles.submitBtn} type='submit'>
              Register
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

const mapStateToProps = ({ participantsData }) => ({
  status: participantsData.status,
  error: participantsData.error,
});

const mapDispatchToProps = dispatch => ({
  addEventParticipant: data => dispatch(addEventParticipantsThunk(data)),
  updateStatus: data => dispatch(changeStatus(data)),
  clearErrorFromStore: () => dispatch(clearError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePhoneForm);

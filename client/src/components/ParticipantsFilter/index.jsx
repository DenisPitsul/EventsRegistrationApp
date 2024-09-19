import React from 'react';
import { connect } from 'react-redux';
import styles from './ParticipantsFilter.module.sass';
import {
  changeEmailFilter,
  changeFullNameFilter,
} from '../../store/slices/participantsSlice';

function ParticipantsFilter ({
  fullName,
  email,
  setFullNameFilter,
  setEmailFilter,
}) {
  const onFullNameFilterChange = e => {
    setFullNameFilter(e.target.value);
  };

  const onEmailFilterChange = e => {
    setEmailFilter(e.target.value);
  };

  const resetFilters = () => {
    setFullNameFilter('');
    setEmailFilter('');
  };

  return (
    <div className={styles.filterWrapper}>
      <span className={styles.filterCaption}>Filters:</span>
      <div className={styles.inputsWrapper}>
        <label className={styles.inputLabel}>
          <span className={styles.inputCaption}>Full name</span>
          <input
            className={styles.input}
            type='text'
            value={fullName}
            onChange={onFullNameFilterChange}
          />
        </label>
        <label className={styles.inputLabel}>
          <span className={styles.inputCaption}>Email</span>
          <input
            className={styles.input}
            type='text'
            value={email}
            onChange={onEmailFilterChange}
          />
        </label>
        <button
          type='button'
          className={styles.resetBtn}
          onClick={resetFilters}
        >
          Reset filters
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ participantsData }) => ({
  fullName: participantsData.filter.fullName,
  email: participantsData.filter.email,
});

const mapDispatchToProps = dispatch => ({
  setFullNameFilter: value => dispatch(changeFullNameFilter(value)),
  setEmailFilter: value => dispatch(changeEmailFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantsFilter);

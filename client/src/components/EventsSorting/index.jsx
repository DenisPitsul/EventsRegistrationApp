import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Select from '../Select';
import { changePage, changeSort } from '../../store/slices/eventsSlice';
import styles from './EventsSorting.module.sass';

function EventsSorting ({ updateSort, updatePage }) {
  const sortOptions = [
    { value: 'id', text: 'Default' },
    { value: 'title', text: 'Title' },
    { value: 'event_date', text: 'Event date' },
    { value: 'organizer', text: 'Organizer' },
  ];

  useEffect(() => {
    return () => {
      updateSort('id');
    };
  }, []);

  const onSortingOptionChange = e => {
    updateSort(e.target.value);
    updatePage(1);
  };

  return (
    <div className={styles.sortWrapper}>
      <Select
        text='Sort by:'
        options={sortOptions}
        onSelect={onSortingOptionChange}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  updateSort: sort => dispatch(changeSort(sort)),
  updatePage: page => dispatch(changePage(page)),
});

export default connect(null, mapDispatchToProps)(EventsSorting);

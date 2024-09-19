import React from 'react';
import { connect } from 'react-redux';
import styles from './EventsPage.module.sass';
import EventsSorting from '../../components/EventsSorting';
import EventsList from '../../components/EventsList';

function EventsPage ({ error }) {
  return (
    <div className='container'>
      {error ? (
        <p className={styles.error}>Failed to load events.</p>
      ) : (
        <>
          <h1 className={styles.title}>Events</h1>
          <EventsSorting />
          <EventsList />
        </>
      )}
    </div>
  );
}

const mapStateToProps = ({ eventsData }) => ({
  error: eventsData.error,
});

export default connect(mapStateToProps)(EventsPage);

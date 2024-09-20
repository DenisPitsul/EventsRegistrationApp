import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ParticipantsList from '../../components/ParticipantsList';
import { getEventByIdThunk } from '../../store/slices/eventsSlice';
import styles from './EventParticipantsPage.module.sass';
import ParticipantsFilter from '../../components/ParticipantsFilter';
import LineChart from '../../components/LineChart';
import { getEventRegistrationsPetDayThunk } from '../../store/slices/participantsSlice';

function EventParticipantsPage ({
  event,
  error,
  registrationsPerDay,
  getEvent,
  getEventRegistrationsPetDay,
}) {
  const { id } = useParams();

  useEffect(() => {
    getEvent(id);
    getEventRegistrationsPetDay(id);
  }, [getEvent, getEventRegistrationsPetDay]);

  return (
    <div className='container'>
      <Link className={styles.link} to='/'>
        Events page
      </Link>
      {error ? (
        <p className={styles.error}>Failed to load event participants.</p>
      ) : (
        <>
          <h1 className={styles.title}>"{event.title}" participants</h1>
          <ParticipantsFilter />
          <ParticipantsList />
          <LineChart data={registrationsPerDay} />
        </>
      )}
    </div>
  );
}

const mapStateToProps = ({ eventsData, participantsData }) => ({
  event: eventsData.event,
  error: participantsData.error,
  registrationsPerDay: participantsData.registrationsPerDay,
});

const mapDispatchToProps = dispatch => ({
  getEvent: eventId => dispatch(getEventByIdThunk(eventId)),
  getEventRegistrationsPetDay: eventId =>
    dispatch(getEventRegistrationsPetDayThunk(eventId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventParticipantsPage);

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import EventRegistrationForm from '../../components/EventRegistrationForm';
import styles from './EventRegistrationPage.module.sass';
import { getEventByIdThunk } from '../../store/slices/eventsSlice';

function EventRegistrationPage ({ event, getEvent }) {
  const { id } = useParams();

  useEffect(() => {
    getEvent(id);
  }, [getEvent]);

  return (
    <div className='container'>
      <Link className={styles.link} to='/events'>
        Events page
      </Link>
      <h1 className={styles.title}>"{event.title}" event registration</h1>
      <EventRegistrationForm />
    </div>
  );
}

const mapStateToProps = ({ eventsData }) => ({
  event: eventsData.event,
});

const mapDispatchToProps = dispatch => ({
  getEvent: eventId => dispatch(getEventByIdThunk(eventId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventRegistrationPage);

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import styles from './EventsList.module.sass';
import { changePage, getEventsThunk } from '../../store/slices/eventsSlice';

function EventsList ({
  events,
  totalPages,
  page,
  sort,
  isFetching,
  getEvents,
  updatePage,
}) {
  useEffect(() => {
    getEvents({ page, sort });
  }, [getEvents, sort, page]);

  const scrollHandler = e => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      !isFetching &&
      page < totalPages
    ) {
      updatePage(page + 1);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [page, totalPages, isFetching]);

  const isEventHappened = eventDate => new Date(eventDate) < new Date();

  return (
    <ul className={styles.eventList}>
      {events.map(({ id, title, description, eventDate, organizer }) => (
        <li key={id} className={styles.eventItem}>
          <h2 className={styles.eventTitle}>{title}</h2>
          <p className={styles.eventDescription}>{description}</p>
          <p className={styles.eventDate}>
            Date: {format(new Date(eventDate), 'yyyy-MM-dd HH:mm')}
          </p>
          <p className={styles.eventOrganizer}>Organizer: {organizer}</p>
          <div className={styles.linksWrapper}>
            <Link className={styles.viewLink} to={`/event/${id}/participants`}>
              View
            </Link>
            {!isEventHappened(eventDate) && (
              <Link
                className={styles.viewLink}
                to={`/event/${id}/registration`}
              >
                Register
              </Link>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = ({ eventsData }) => ({
  events: eventsData.events,
  totalPages: eventsData.totalPages,
  page: eventsData.page,
  sort: eventsData.sort,
  isFetching: eventsData.isFetching,
});

const mapDispatchToProps = dispatch => ({
  getEvents: sortFilter => dispatch(getEventsThunk(sortFilter)),
  updatePage: page => dispatch(changePage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);

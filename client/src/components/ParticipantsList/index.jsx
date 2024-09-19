import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { debounce } from 'lodash';
import { getEventParticipantsThunk } from '../../store/slices/participantsSlice';
import styles from './ParticipantsList.module.sass';

function ParticipantsList ({ participants, filter, getParticipants }) {
  const { id } = useParams();

  useEffect(() => {
    getParticipants(id, filter);
  }, []);

  const debouncedGetParticipants = useCallback(
    debounce((id, filter) => {
      getParticipants(id, filter);
    }, 500),
    []
  );

  useEffect(() => {
    debouncedGetParticipants(id, filter);

    return () => {
      debouncedGetParticipants.cancel();
    };
  }, [getParticipants, filter, debouncedGetParticipants]);

  return (
    <>
      {participants.length ? (
        <ul className={styles.participantList}>
          {participants.map(({ id, fullName, email }) => (
            <li key={id} className={styles.participantItem}>
              <h2 className={styles.participantName}>{fullName}</h2>
              <p className={styles.participantEmail}>{email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No participants found</p>
      )}
    </>
  );
}

const mapStateToProps = ({ participantsData }) => ({
  participants: participantsData.participants,
  filter: participantsData.filter,
});

const mapDispatchToProps = dispatch => ({
  getParticipants: (eventId, filter) =>
    dispatch(getEventParticipantsThunk({ eventId, filter })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ParticipantsList);

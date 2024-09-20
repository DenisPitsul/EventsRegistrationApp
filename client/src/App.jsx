import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import './App.css';
import EventsPage from './pages/EventsPage';
import EventRegistrationPage from './pages/EventRegistrationPage';
import EventParticipantsPage from './pages/EventParticipantsPage';
import Loader from './components/Loader';

function App ({ isEventFetching, isParticipantsFetching }) {
  return (
    <>
      <ToastContainer className='notification' />
      {(isEventFetching || isParticipantsFetching) && <Loader />}
      <Routes>
        <Route path='/' element={<EventsPage />} />
        <Route
          path='/event/:id/registration'
          element={<EventRegistrationPage />}
        />
        <Route
          path='/event/:id/participants'
          element={<EventParticipantsPage />}
        />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
}

const mapStateToProps = ({ eventsData, participantsData }) => ({
  isEventFetching: eventsData.isFetching,
  isParticipantsFetching: participantsData.isFetching,
});

export default connect(mapStateToProps)(App);
